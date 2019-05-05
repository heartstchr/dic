#! /usr/bin/env node
const chalk= require('chalk');
const clear= require('clear');
const figlet= require('figlet');
const program= require('commander');
const { prompt } = require('inquirer');
const CFonts = require('cfonts');


const { getDefinations, getSynonyms, getAntonyms , getExamples, getFullDict, getWordOfDay, getWordGame} = require('./lib/index');
const Common= require('./lib/helper/common')
const style = {
	font: 'block',
	align: 'left',
	colors: ['system'],
	background: 'transparent',
	letterSpacing: 1,
	lineHeight: 1,
	space: true,
	maxLength: '0',
};

const questions = [
	{
	  type : 'input',
	  name : 'word',
	  message : 'Enter the word ...'
	}
  ];
const secondQuestion = [
	{
	  type : 'rawlist',
	  name : 'option',
	  message : 'Answer is wrong. what do you want to do',
	  choices:['Try again','Hint','Quit']
	}
];

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
			console.log(`${CFonts.say(word, style)} \n ${chalk.green(data.join('\n'))}`);
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
			
			await tryAgain(data.word)
		});
	program.parse(process.argv);
};

run();

const tryAgain=async (word)=>{
	let answer = await prompt(questions)
	let status = Common.checkWord(answer,word);
	console.log(word);
	if (status==true){
		console.log(chalk.green('Yoo!! Word by you is correct'))
	}else{
		let answer = await prompt(secondQuestion);
		if(answer.option==secondQuestion[0].choices[0]){
			await tryAgain(word);
		}else if(answer.option==secondQuestion[0].choices[1]){
			let hint = await displayHint(word);
			console.log(chalk.yellow(`Try this Hint: ${chalk.bold.yellow(hint)}`))
			await tryAgain(word);
		}else if(answer.option==secondQuestion[0].choices[2]){
			let data = await getFullDict(word);
			let result= Common.formatResult(data);
			console.log(`${CFonts.say(word, style)} \n ${chalk.green(result.join('\n'))}`);
		}
	}
}

