aws_region                        = "us-gov-east-1"
aws_other_region                  = "us-gov-west-1"
project                           = "Crossfeed"
stage                             = "prod"
frontend_domain                   = "crossfeed.cyber.dhs.gov"
frontend_lambda_function          = "crossfeed-security-headers-prod"
frontend_bucket                   = "crossfeed.cyber.dhs.gov"
api_domain                        = "api.crossfeed.cyber.dhs.gov"
db_name                           = "crossfeed-prod-db2"
db_port                           = 5432
db_table_name                     = "cfproddb"
db_instance_class                 = "db.m5.xlarge"
ssm_crossfeed_vpc_name            = "/crossfeed/prod/VPC_NAME"
log_metric_namespace              = "LogMetrics"
log_metric_api_error_rate         = "crossfeed-prod-APIErrorRate"
log_metric_root_user              = "crossfeed-prod-RootUserAccess"
log_metric_unauthorized_api_call  = "crossfeed-prod-UnauthorizedApiCall"
log_metric_login_without_mfa      = "crossfeed-prod-ConsoleSignInWithoutMFA"
log_metric_iam_policy             = "crossfeed-prod-IAMPolicyChange"
log_metric_cloudtrail             = "crossfeed-prod-CloudTrailConfigurationChanges"
log_metric_login_failure          = "crossfeed-prod-ConsoleLoginFailure"
log_metric_cmk_delete_disable     = "crossfeed-prod-DisablingOrScheduledDeletionOfCMK"
log_metric_s3_bucket_policy       = "crossfeed-prod-S3BucketPolicyChanges"
log_metric_aws_config             = "crossfeed-prod-AWSConfigConfigurationChange"
log_metric_security_group         = "crossfeed-prod-SecurityGroupChange"
log_metric_nacl                   = "crossfeed-prod-NACLChange"
log_metric_network_gateway        = "crossfeed-prod-NetworkGatewayChange"
log_metric_route_table            = "crossfeed-prod-RouteTableChange"
log_metric_vpc                    = "crossfeed-prod-VPCChange"
log_metric_ec2_shutdown           = "crossfeed-prod-EC2Shutdown"
log_metric_db_shutdown            = "crossfeed-prod-DBShutdown"
log_metric_db_deletion            = "crossfeed-prod-DBDeletion"
sns_topic_alarms                  = "crossfeed-prod-cis-alarms"
ssm_lambda_subnet                 = "/crossfeed/prod/SUBNET_ID"
ssm_lambda_sg                     = "/crossfeed/prod/SG_ID"
ssm_worker_subnet                 = "/crossfeed/prod/WORKER_SUBNET_ID"
ssm_worker_sg                     = "/crossfeed/prod/WORKER_SG_ID"
ssm_worker_arn                    = "/crossfeed/prod/WORKER_CLUSTER_ARN"
ssm_db_name                       = "/crossfeed/prod/DATABASE_NAME"
ssm_db_host                       = "/crossfeed/prod/DATABASE_HOST"
ssm_db_username                   = "/crossfeed/prod/DATABASE_USER"
ssm_db_password                   = "/crossfeed/prod/DATABASE_PASSWORD"
ssm_pe_db_name                    = "/crossfeed/prod/PE_DB_NAME"
ssm_pe_db_username                = "/crossfeed/prod/PE_DB_USERNAME"
ssm_pe_db_password                = "/crossfeed/prod/PE_DB_PASSWORD"
ssm_matomo_db_password            = "/crossfeed/prod/MATOMO_DATABASE_PASSWORD"
ssm_worker_signature_public_key   = "/crossfeed/prod/WORKER_SIGNATURE_PUBLIC_KEY"
ssm_worker_signature_private_key  = "/crossfeed/prod/WORKER_SIGNATURE_PRIVATE_KEY"
ssm_censys_api_id                 = "/crossfeed/prod/CENSYS_API_ID"
ssm_censys_api_secret             = "/crossfeed/prod/CENSYS_API_SECRET"
ssm_shodan_api_key                = "/crossfeed/prod/SHODAN_API_KEY"
ssm_hibp_api_key                  = "/crossfeed/prod/HIBP_API_KEY"
ssm_pe_shodan_api_keys            = "/crossfeed/prod/PE_SHODAN_API_KEYS"
ssm_sixgill_client_id             = "/crossfeed/prod/SIXGILL_CLIENT_ID"
ssm_sixgill_client_secret         = "/crossfeed/prod/SIXGILL_CLIENT_SECRET"
ssm_lg_api_key                    = "/crossfeed/prod/LG_API_KEY"
ssm_lg_workspace_name             = "/crossfeed/prod/LG_WORKSPACE_NAME"
ssm_https_proxy                   = "/crossfeed/prod/HTTPS_PROXY"
ssm_ses_email_identity_arn        = "/crossfeed/prod/SES_EMAIL_IDENTITY_ARN"
ssm_worker_kms_keys               = "/crossfeed/prod/WORKER_KMS_KEYS"
db_group_name                     = "crossfeed-prod-db-group"
worker_ecs_repository_name        = "crossfeed-prod-worker"
worker_ecs_cluster_name           = "crossfeed-prod-worker"
worker_ecs_task_definition_family = "crossfeed-prod-worker"
worker_ecs_log_group_name         = "crossfeed-prod-worker"
worker_ecs_role_name              = "crossfeed-prod-worker"
logging_bucket_name               = "cisa-crossfeed-prod-logging"
export_bucket_name                = "cisa-crossfeed-prod-exports"
reports_bucket_name               = "cisa-crossfeed-prod-reports"
pe_db_backups_bucket_name         = "cisa-crossfeed-prod-pe-db-backups"
user_pool_name                    = "crossfeed-prod"
user_pool_domain                  = "crossfeed"
ssm_user_pool_id                  = "/crossfeed/prod/USER_POOL_ID"
ssm_user_pool_client_id           = "/crossfeed/prod/USER_POOL_CLIENT_ID"
ses_support_email_sender          = "noreply@crossfeed.cyber.dhs.gov"
ses_support_email_replyto         = "vulnerability@cisa.dhs.gov"
matomo_ecs_cluster_name           = "crossfeed-matomo-prod"
matomo_ecs_task_definition_family = "crossfeed-matomo-prod"
matomo_ecs_log_group_name         = "crossfeed-matomo-prod"
matomo_db_name                    = "crossfeed-matomo-prod"
matomo_db_instance_class          = "db.m5.xlarge"
matomo_ecs_role_name              = "crossfeed-matomo-prod"
es_instance_type                  = "t3.medium.elasticsearch"
es_instance_count                 = 3
es_instance_volume_size           = 200
create_db_accessor_instance       = false
db_accessor_instance_class        = "t3.2xlarge"
create_elk_instance               = false
elk_instance_class                = "t3.2xlarge"
ami_id                            = "ami-0a1445a13e666a557"
cloudtrail_name                   = "crossfeed-prod-all-events"
cloudtrail_bucket_name            = "cisa-crossfeed-prod-cloudtrail"
cloudtrail_role_name              = "crossfeed-prod-cloudtrail"
cloudtrail_log_group_name         = "crossfeed-prod-cloudtrail"
es_instance_master_count          = 3
ssm_vpc_id                        = "/LZ/VPC_ID"
ssm_vpc_cidr_block                = "/LZ/VPC_CIDR_BLOCK"
ssm_route_table_endpoints_id      = "/LZ/ROUTE_TABLE_ENDPOINTS_ID"
ssm_route_table_private_A_id      = "/LZ/ROUTE_TABLE_PRIVATE_A_ID"
ssm_route_table_private_B_id      = "/LZ/ROUTE_TABLE_PRIVATE_B_ID"
ssm_route_table_private_C_id      = "/LZ/ROUTE_TABLE_PRIVATE_C_ID"
ssm_subnet_backend_id             = "/LZ/SUBNET_ENDPOINT_A_ID"
ssm_subnet_worker_id              = "/LZ/SUBNET_ENDPOINT_B_ID"
ssm_subnet_matomo_id              = "/LZ/SUBNET_ENDPOINT_C_ID"
ssm_subnet_db_1_id                = "/LZ/SUBNET_PRIVATE_A_ID"
ssm_subnet_db_2_id                = "/LZ/SUBNET_PRIVATE_B_ID"
ssm_subnet_es_id                  = "/LZ/SUBNET_PRIVATE_C_ID"