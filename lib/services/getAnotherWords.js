const Constant = require('../helper/constant');
const APIKEY= require('./getApiKey');
const request= require('../helper/request');

const query= { useCanonical: false,limitPerRelationshipType:10,api_key: APIKEY};

const getAnotherWords= async (word)=>{
	const url= `${Constant.baseUrl}${word}/relatedWords`;
	let object = {}
	let data = await request.get(url,query).catch((err)=>{
		return err;
	})
	if(data.relationType==='synonym'){
		return object[data.relationType]=data.words;
	}
	else if (data.relationType==='antonym'){
		return object[data.relationType]= data.words;
	}
	else{
		return data
	}
};

module.exports = getAnotherWords;
