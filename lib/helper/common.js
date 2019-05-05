const chalk= require('chalk');
const { prompt } = require('inquirer');
const CFonts = require('cfonts');
const Constant= require('./constant')
const { getFullDict} = require('../index');


const formatResult= (data)=>{
	let result= [];
	Object.keys(data).forEach((ele)=>{
		result.push(data[ele]?`\n ${chalk.bold.yellow(ele)} \n \n ${ data[ele].join('\n')}`:``)
	})
	return result;
}

const checkWord= (data,word)=>{
	if(data.word===word){
		return true
	}else{
		return false
	}
}
const displayHint= (data)=>{
	return data.split('').sort(function(){return 0.5-Math.random()}).join('');
}

const tryAgain=async (word)=>{
	let answer = await prompt(Constant.question)
	let status = checkWord(answer,word);
	if (status==true){
		console.log(chalk.green('Yoo!! Word by you is correct'))
	}else{
		let answer = await prompt(Constant.secondQuestion);
		if(answer.option==Constant.secondQuestion[0].choices[0]){
			await tryAgain(word);
		}else if(answer.option==Constant.secondQuestion[0].choices[1]){
			let hint = await displayHint(word);
			console.log(chalk.yellow(`Try this Hint: ${chalk.bold.yellow(hint)}`))
			await tryAgain(word);
		}else if(answer.option==Constant.secondQuestion[0].choices[2]){
			let data = await getFullDict(word);
			let result= formatResult(data);
			console.log(`${CFonts.say(word, Constant.style)} \n ${chalk.green(result.join('\n'))}`);
		}
	}
}
module.exports={formatResult,checkWord, displayHint, tryAgain}