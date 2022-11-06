#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { SubmodCdkStack } from "../lib/submod-cdk-stack";

const app = new cdk.App();
const stack = new SubmodCdkStack(app, "SubmodCdkStack");
cdk.Tags.of(stack).add("project", "submod-cdk");
