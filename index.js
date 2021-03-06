#! /usr/bin/env node
const chalk= require('chalk');
const clear= require('clear');
const figlet= require('figlet');
const program= require('commander');
const CFonts = require('cfonts');


const { getDefinations, getSynonyms, getAntonyms , getExamples, getFullDict, getWordOfDay, getWordGame} = require('./lib/index');
const Common= require('./lib/helper/common')
const Constant= require('./lib/helper/constant')

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
			console.log(`${CFonts.say(word, Constant.style)} \n ${chalk.green(data.join('\n'))}`);
		});

	program
		.command('getSynonyms <word>')
		.alias('syn')
		.description('Get synonyms')
		.action(async (word) => {
			let data = await getSynonyms(word);
			console.log(chalk.green(data.synonym.join(`\n`)));
		});

	program
		.command('getAntonyms <word>')
		.alias('ant')
		.description('Get antonyms')
		.action(async (word) => {
			let data = await getAntonyms(word);
			console.log(chalk.green(data.antonym.join(`\n`)));
		});

	program
		.command('getExamples <word>')
		.alias('ex')
		.description('Get Examples')
		.action(async (word) => {
			let data = await getExamples(word);
			console.log(chalk.green(data.join('\n')));
		});
	program
		.command('getFullDict <word>')
		.alias('fdict')
		.description('Get Full Dict')
		.action(async (word) => {
			let data = await getFullDict(word);
			let result= Common.formatResult(data);
			console.log(chalk.green(result.join('\n')));
		});

	program
		.command('getWordOfDay')
		.alias('wod')
		.description('Get Word Of Day')
		.action(async () => {
			let data = await getWordOfDay();
			let result= Common.formatResult(data);
			console.log(chalk.green(result.join('\n')));
		});

	program
		.command('getWordGame')
		.alias('play')
		.description('Get Word Game')
		.action(async () => {
			let data = await getWordGame();
			let result= Common.formatResult(data.all);
			console.log(chalk.green(result.join('\n')));
			console.log('\n')
			await Common.tryAgain(data.word)
		});
	program.parse(process.argv);
};

run();
