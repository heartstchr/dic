#! /usr/bin/env node
const chalk       = require('chalk');
const clear       = require('clear');
const figlet      = require('figlet');
clear();

const run = async () => {
    console.log(
        chalk.yellow(
          figlet.textSync('Dictionary', { horizontalLayout: 'full' })
        )
      );
}

run()