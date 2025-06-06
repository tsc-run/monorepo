#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { buildCommand } from './commands/build.js';
import { deployCommand } from './commands/deploy.js';
import { newCommand } from './commands/new.js';
import { devCommand } from './commands/dev.js';

void yargs(hideBin(process.argv))
  .command(newCommand)
  .command(buildCommand)
  .command(deployCommand)
  .command(devCommand)
  .demandCommand()
  .help().argv;
