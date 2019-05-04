const Constant = require('../constant');
const APIKEY= require('./getApiKey');
const request= require('../request');
const options= { includeDuplicates: false, useCanonical: false, limit: 5, api_key: APIKEY};


const getExamples= (word)=>{
	const url= `${Constant.baseUrl}${word}/examples`;
	return request.get(url,options);
};

module.exports = getExamples;
