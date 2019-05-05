const chalk= require('chalk');

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
module.exports={formatResult,checkWord, displayHint}