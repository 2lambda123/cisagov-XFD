# provider.tf

# Specify the provider and access details
terraform {
  required_providers {
    aws = {
      version = "~> 5.51"
    }
  }
}

provider "aws" {
  region                   = "us-east-1"
  shared_credentials_files = ["$HOME/.aws/credentials"]
}

terraform {
  backend "s3" {
    encrypt = true
  }
}
