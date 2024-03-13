import getAllDomains from './helpers/getAllDomains';
import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import { CommandOptions } from './ecs-client';
import saveTrustymailResultsToDb from './helpers/saveTrustymailResultsToDb';
import * as chokidar from 'chokidar';
import logger from '../tools/lambda-logger';

// TODO: Retry failed domains
// TODO: PSL is downloaded once per container (number of orgs / 2, rounded up); would like to download only once per day
export const handler = async (commandOptions: CommandOptions) => {
  const { organizationId, organizationName } = commandOptions;
  logger.info(`Running Trustymail on organization ${organizationName}`);
  const domains = await getAllDomains([organizationId!]);
  const queue = new Set(domains.map((domain) => `${domain.id}.json`));
  const failedDomains = new Set<string>();
  logger.info(
    `${organizationName} domains to be scanned:`,
    domains.map((domain) => domain.name)
  );
  logger.info(`queue ${queue}`);
  for (const domain of domains) {
    const path = `${domain.id}.json`;
    // Event listener detects Trustymail results file at creation and syncs it to db
    chokidar.watch(path).on('add', (path) => {
      logger.info(`Trustymail saved results to ${path}`);
      logger.info(`Syncing ${path} to db...`);
      saveTrustymailResultsToDb(path).then(() => {
        logger.info(`Deleting ${path} and removing it from queue...`);
        queue.delete(path);
        logger.info(`Items left in queue: ${queue}`);
      });
    });
    try {
      const args = [
        domain.name,
        '--json',
        `--output=${domain.id}`,
        '--psl-filename=public_suffix_list.dat'
      ];
      logger.info(`Running Trustymail with args: ${args}`);
      const child = spawn('trustymail', args, { stdio: 'pipe' });
      addEventListenersToChildProcess(
        child,
        domain,
        queue,
        path,
        failedDomains
      );
    } catch (e) {
      logger.error(JSON.stringify(e));
    }
  }
  // Keep container alive while syncing results to db; timeout after 10 minutes (60 * 10 seconds)
  let dbSyncTimeout = 0;
  while (queue.size > 0 && dbSyncTimeout < 60) {
    logger.info('Syncing...');
    await delay(1000 * 2);
    dbSyncTimeout++;
  }
  logger.info(
    `Trustymail successfully scanned ${
      domains.length - failedDomains.size
    } out of ${domains.length} domains \n failed domains: ${failedDomains}`
  );
};

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function addEventListenersToChildProcess(
  child: ChildProcessWithoutNullStreams,
  domain: { name: string; id: string },
  queue: Set<string>,
  path: string,
  failedDomains: Set<string>
) {
  child.stdout.on('data', (data) => {
    logger.info(`${domain.name} (${domain.id}) stdout: ${data}`);
  });
  child.on('spawn', () => {
    logger.info(
      `Spawned ${domain.name} (${domain.id}) Trustymail child process`
    );
  });
  child.on('error', (err) =>
    logger.error(
      `Error with Trustymail ${domain.name} (${domain.id}) child process:`,
      JSON.stringify(err)
    )
  );
  child.on('exit', (code, signal) => {
    logger.info(
      `Trustymail child process ${domain.name} (${domain.id}) exited with code ${code} and signal ${signal}`
    );
    if (code !== 0) {
      queue.delete(path);
      failedDomains.add(domain.id);
    }
  });
}
