# Exercise 1: Set up AWS account, AWS CLI and credentials

You will use AWS services to develop and host your mock API. So, before you dive deep into coding your mock API, you'll need to set install and set up AWS CLI.

Do you have an AWS account you can use? You need one account per team.

> Most likely all the exercises for this workshop will be free, as all the services we'll use have a generous free tier. But let's assume that the cost can be anywhere between $0 and $3 per month. Are you still ok with using your own AWS account?

If the answer to any of previous questions is _no_, please contact the instructor to get a temporary account for your team.

## Tasks

This exercise has the following tasks:

1. Get an AWS account
2. Install AWS CLI
3. Configure AWS credentials

### Get an AWS account

You can create an AWS account at https://console.aws.amazon.com. Keep in mind you'll need to add a payment info and confirm your phone.

If you can't create an account contact the instructor to get a temporary account access.

### Install AWS CLI

Next thing you'll need to do is to install AWS CLI. You can find CLI at https://aws.amazon.com/cli/. If you are using Mac or Linux, make sure you have Python 2.6.5 or higher with `pip`.

### Configure AWS credentials

Once you installed AWS CLI, you need to set up (and possibly create) AWS credentials.

To create the credentials, sign in to the [AWS Web console](https://console.aws.amazon.com), open the Identity and Access Management (IAM) service and create a new user. Select "Programmatic access" in the choice for access type, and take note of the generated keys.

Then run the following command from your terminal:
```bash
aws configure
```

The AWS utility will ask you about the keys, so paste what you copied in the previous step. If you get a question about the region, respond with `eu-cental-1`.

Check that your credentials are correctly configured by running the following command from your terminal:
```bash
aws sts get-caller-identity
```

If this command prints a result similar to the one below, everything works correctly:
```json
{
  "UserId": "111111111111",
  "Account": "222222222222",
  "Arn": "arn:aws:iam:1111111111:root"
}
```

If you get an error, check out the section Configuring the AWS CLI from the [AWS CLI User Guide](https://docs.aws.amazon.com/cli/) for troubleshooting information, or contact the instructor.