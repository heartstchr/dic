#! /usr/bin/env node
const chalk= require('chalk');
const clear= require('clear');
const figlet= require('figlet');
const program= require('commander');

const { getDefinations, getSynonyms, getAntonyms , getExamples} = require('./lib/index');

clear();

const run = async () => {
	console.log(
		chalk.yellow(
			figlet.textSync('Dictionary', { horizontalLayout: 'full' })
		)
	);

	program
		.version('0.0.1')
		.description('command line dictionary');

	program
		.command('getDefinations <word>')
		.alias('def')
		.description('Get definations')
		.action(word => getDefinations(word));

	program
		.command('getSynonyms <word>')
		.alias('syn')
		.description('Get synonyms')
		.action(word => getSynonyms(word));

	program
		.command('getAntonyms <word>')
		.alias('ant')
		.description('Get antonyms')
		.action(word => getAntonyms(word));

	program
		.command('getExamples <word>')
		.alias('ex')
		.description('Get Examples')
		.action(word => getExamples(word));



		
	program.parse(process.argv);
};

run();