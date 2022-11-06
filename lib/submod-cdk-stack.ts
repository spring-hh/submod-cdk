import { Duration, RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import * as cognito from "aws-cdk-lib/aws-cognito";
import { Construct } from "constructs";

export class SubmodCdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // user pool
    const userPool = new cognito.UserPool(this, "userPool", {
      selfSignUpEnabled: true,
      signInAliases: {
        username: true,
        email: true,
      },
      removalPolicy: RemovalPolicy.DESTROY,
    });

    // user pool client
    const userPoolClient = new cognito.UserPoolClient(this, "userPoolClient", {
      userPool,
      authFlows: {
        userPassword: true,
        userSrp: true,
        adminUserPassword: true,
      },
    });
  }
}
