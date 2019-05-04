#! /usr/bin/env node
const chalk= require('chalk');
const clear= require('clear');
const figlet= require('figlet');
const program= require('commander');

const { getDefinations, getSynonyms, getAntonyms , getExamples, getFullDict, getWordOfDay, getWordGame} = require('./lib/index');

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
		.action(async (word) => {
			let data = await getDefinations(word);
			console.log(chalk.green(data));
		});

	program
		.command('getSynonyms <word>')
		.alias('syn')
		.description('Get synonyms')
		.action(async (word) => {
			let data = await getSynonyms(word);
			console.log(chalk.green(data));
		});

	program
		.command('getAntonyms <word>')
		.alias('ant')
		.description('Get antonyms')
		.action(async (word) => {
			let data = await getAntonyms(word);
			console.log(chalk.green(data));
		});

	program
		.command('getExamples <word>')
		.alias('ex')
		.description('Get Examples')
		.action(async (word) => {
			let data = await getExamples(word);
			console.log(chalk.green(data));
		});
		// getDefinations(word)
		// getSynonyms(word)
		// getAntonyms(word)
	program
		.command('getFullDict <word>')
		.alias('fdict')
		.description('Get Full Dict')
		.action(async (word) => {
			let data = await getFullDict(word);
			console.log(chalk.green(JSON.stringify(data)));
		});

	program
		.command('getWordOfDay')
		.alias('wod')
		.description('Get Word Of Day')
		.action(async () => {
			let data = await getWordOfDay();
			console.log(chalk.green(JSON.stringify(data)));
		});

	program
		.command('getWordGame')
		.alias('play')
		.description('Get Word Game')
		.action(async () => {
			let data = await getWordGame();
			console.log(chalk.green(JSON.stringify(data)));
		});

	program.parse(process.argv);
};

run();