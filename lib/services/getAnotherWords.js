const Constant = require('../constant');
const APIKEY= require('./getApiKey');
const request= require('./request');

const options= { useCanonical: false,limitPerRelationshipType:10,api_key: APIKEY};

const getSynonyms= (word)=>{
	let url= `${Constant.baseUrl}${word}/relatedWords`;
	let data = request.get(url,options);
	if(data.relationType==='synonym'){
		return data.words;
	}
};
const getAntonyms= (word)=>{
	let url= `${Constant.baseUrl}${word}/relatedWords`;
	let data = request.get(url,options);
	if(data.relationType==='antonym'){
		return data.words;
	}
};

module.exports = {
	getSynonyms:getSynonyms,
	getAntonyms:getAntonyms
};
