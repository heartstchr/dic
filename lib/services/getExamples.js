const Constant = require('../helper/constant');
const APIKEY= require('./getApiKey');
const request= require('../helper/request');
const query= { includeDuplicates: false, useCanonical: false, limit: 5, api_key: APIKEY};


const getExamples= async (word)=>{
	const url= `${Constant.baseUrl}${word}/examples`;
	let data = await request.get(url,query).catch((err)=>{
		return err;
	})
	return data
};

module.exports = getExamples;
