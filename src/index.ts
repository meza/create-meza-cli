#!/usr/bin/env node

import { Command } from 'commander';
import { version } from '../package.json';

const APP_NAME = 'Meza\'s CLI tool template';
const APP_DESCRIPTION = 'A template for CLI typescript apps';

const program = new Command();
program.name(APP_NAME).version(version).description(APP_DESCRIPTION);

program.parse();
