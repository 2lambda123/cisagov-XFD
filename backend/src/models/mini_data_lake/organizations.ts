// The data in this table is derived from the Vulnerability Scans Database,
// the [requests Collection] (https://github.com/cisagov/ncats-data-dictionary/blob/develop/NCATS_Data_Dictionary.md#requests-collection).

import {
  Entity,
  Index,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
  ManyToMany,
  ManyToOne,
  Relation
} from 'typeorm';
import { Domain } from './domains';
import { Ip } from './ips';
import { Location } from './locations';
import { Contact } from './contacts';
import { Tag } from './tag';
import { Sector } from './sectors';
import { Report } from './reports';
import { Request } from './requests';
import { SslyzeScan } from './sslyze_scan';
import { Snapshot } from './snapshots';
import { Tally } from './tallies';
import { TrustymailScan } from './trustymail_scans';
import { VulnScan } from './vuln_scans';
import { Cidr } from './cidrs';
import { HostScan } from './host_scans';
import { Host } from './hosts';
import { Ticket } from './tickets';
@Entity()
export class Organization extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: true,
    type: 'varchar'
  })
  name: string | null;

  @Column({
    nullable: true,
    type: 'varchar',
    unique: true
  })
  @Index()
  acronym: string | null;

  @Column({ nullable: true, type: 'timestamp' })
  firstEngageDate: Date | null;

  @Column({ nullable: true, type: 'timestamp' })
  createdDate: Date | null;

  @Column({
    nullable: true,
    type: 'varchar'
  })
  createdEmplyeeId: string | null;

  @Column({ nullable: true, type: 'timestamp' })
  updatedDate: Date | null;

  @Column({
    nullable: true,
    type: 'varchar'
  })
  updatedEmployeeId: string | null;

  @Column({ nullable: true })
  retired: boolean;

  @Column({ nullable: true })
  peReportOn: boolean;

  @Column({ nullable: true })
  pePremium: boolean;

  @Column({ nullable: true })
  peDemo: boolean;

  @Column({ nullable: true })
  peRunScans: boolean;

  @Column({
    nullable: true,
    type: 'varchar'
  })
  type: string | null;

  @Column({ nullable: true })
  stakeholder: boolean;

  @OneToMany((type) => Domain, (domain) => domain.organization, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  domains: Relation<Domain>[];

  @OneToMany((type) => Ip, (ip) => ip.organization, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  ips: Relation<Ip>[];

  @OneToMany((type) => Ticket, (ticket) => ticket.organization, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  tickets: Relation<Ticket>[];

  @ManyToMany((type) => Location, (location) => location.organizations, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  locations: Relation<Location>[];

  @ManyToMany((type) => Contact, (contact) => contact.organizations, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  contacts: Relation<Contact>[];

  @ManyToMany((type) => Tag, (tag) => tag.organizations, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  tags: Relation<Tag>[];

  @ManyToMany((type) => Sector, (sector) => sector.organizations, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  sectors: Relation<Sector>[];

  @ManyToMany((type) => Cidr, (cidr) => cidr.organizations, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  cidrs: Relation<Cidr>[];

  @ManyToOne((type) => Organization, (org) => org.children, {
    onDelete: 'CASCADE',
    nullable: true
  })
  parent: Relation<Organization>;

  @OneToMany((type) => Organization, (org) => org.parent, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  children: Relation<Organization>[];

  @OneToMany((type) => Report, (report) => report.organization, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  reports: Relation<Report>[];

  @OneToMany((type) => Request, (request) => request.organization, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  requests: Relation<Request>[];

  @OneToMany((type) => SslyzeScan, (sslyze) => sslyze.organization, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  sslyzeScans: Relation<SslyzeScan>[];

  @OneToMany((type) => Snapshot, (snapshot) => snapshot.organization, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  snapshots: Relation<Snapshot>[];

  @OneToMany((type) => Tally, (tally) => tally.organization, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  tallies: Relation<Tally>[];

  @OneToMany(
    (type) => TrustymailScan,
    (trustymail_scan) => trustymail_scan.organization,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  )
  @Column({
    nullable: true,
    type: 'varchar'
  })
  reportPeriod: string | null;
  trustymailScans: Relation<TrustymailScan>[];

  @OneToMany((type) => VulnScan, (vuln_scan) => vuln_scan.organization, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  vulnScans: Relation<VulnScan>[];

  @OneToMany((type) => HostScan, (host_scan) => host_scan.organization, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  hostScans: Relation<HostScan>[];

  @OneToMany((type) => Host, (host) => host.organization, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  hosts: Relation<Host>[];
}
