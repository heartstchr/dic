const Constant = require('../helper/constant');
const APIKEY= require('./getApiKey');
const request= require('../helper/request');

const query= { useCanonical: false,limitPerRelationshipType:10,api_key: APIKEY};

const getSynonyms= async (word)=>{
	const url= `${Constant.baseUrl}${word}/relatedWords`;
	let data = await request.get(url,query).catch((err)=>{
		return err;
	})
	if(data.relationType==='synonym'){
		return data.words;
	}
};
const getAntonyms= async (word)=>{
	const url= `${Constant.baseUrl}${word}/relatedWords`;
	let data = await request.get(url,query).catch((err)=>{
		return err;
	})
	if(data.relationType==='antonym'){
		return data.words;
	}
};

module.exports = {
	getSynonyms:getSynonyms,
	getAntonyms:getAntonyms
};
