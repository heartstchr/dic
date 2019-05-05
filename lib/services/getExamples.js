const Constant = require('../helper/constant');
const APIKEY= require('./getApiKey');
const request= require('../helper/request');
const query= { includeDuplicates: false, useCanonical: false, limit: 5, api_key: APIKEY};


const getExamples= async (word)=>{
	const url= `${Constant.baseUrl}word.json/${word}/examples`;
	let result=[];
	let data = await request.get(url,query).catch((err)=>{
		return err;
	})
	data.examples.forEach((element,index) => {
		result.push(`${index+1}. ${element.text}`)
	});
	return result
};

module.exports = getExamples;
