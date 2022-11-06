#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { SubmodCdkStack } from '../lib/submod-cdk-stack';

const app = new cdk.App();
new SubmodCdkStack(app, 'SubmodCdkStack');
