#!/usr/bin/env node

var join = require('path').join;
var spawn = require('child_process').spawn;

var command = process.argv[0];

var args = [
  '--harmony',
  join(__dirname, 'learn-generators.js'),
].concat(process.argv.slice(2));

var opts = {
  stdio: 'inherit',
};

spawn(command, args, opts).on('close', process.exit);
