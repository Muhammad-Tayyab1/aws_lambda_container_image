import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Step01LambdaContainerWithEcr from '../lib/step01_lambda_container_with_ecr-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Step01LambdaContainerWithEcr.Step01LambdaContainerWithEcrStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
