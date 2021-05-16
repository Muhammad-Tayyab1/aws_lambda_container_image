import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Step00LambdaContainerWithLocalImage from '../lib/step00 _lambda_container_with_local_image-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Step00LambdaContainerWithLocalImage.Step00LambdaContainerWithLocalImageStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
