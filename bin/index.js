#!/usr/bin/env node
/* eslint no-console: ["error", { allow: ["log"] }] */

const program  = require('commander');
const fs = require('fs');
const pkg = require('../package.json');
const lottery = require('../lottery.js');

/**
 * CLI program options, arguments and actions.
 * @name CLI
 * @see commander
 */

let inputPath;

program
  .version(pkg.version)
  .description(pkg.description)
  .arguments('<inputFile>')
  .action((inputFile) => {
    inputPath  = inputFile.toString();
  })
  .parse(process.argv);


fs.readFile(inputPath, 'utf8', (err, data) => {

  const result = lottery(data);
  const msg = `Parabens ${result.name} :) - inscricao: ${result.inscricao}`

  console.log(msg);

});
