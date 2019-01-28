#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const generate_1 = __importDefault(require("./generate"));
function getOptionValue(v) {
    return v;
}
commander_1.default
    .version('0.0.1');
commander_1.default
    .command('generate <prefix> <suffix> [length]')
    .alias('g')
    .description('Generate password, with prefix and suffix options, optional length.')
    .action((prefix, suffix, length) => {
    console.log(generate_1.default({ prefix, suffix, length }));
});
commander_1.default
    .on('command:*', () => {
    console.error(`No such command, see -h.`);
})
    .parse(process.argv);
