const baseUrl = 'https://api.wordnik.com/v4/';
// const credential= {
// 		username:'jiwan',
// 		pass : 'Jiwan1234'
// 	};
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

const question = [
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

module.exports = {   
	baseUrl,
	// credential,
	style,
	question,
	secondQuestion
};