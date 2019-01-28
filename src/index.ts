#!/usr/bin/env node

import program from 'commander';
import { sha1, MD5 } from 'object-hash';
import generate from './generate';

function getOptionValue(v: string): string {
  return v;
}

program
  .version('0.0.1');

program
  .command('generate <prefix> <suffix> [length]')
  .alias('g')
  .description('Generate password, with prefix and suffix options, optional length.')
  .action((prefix: string, suffix: string, length: number) => {
    console.log(generate({ prefix, suffix, length }));
  });

program
  .on('command:*', () => {
    console.error(`No such command, see -h.`);
  })
  .parse(process.argv);
