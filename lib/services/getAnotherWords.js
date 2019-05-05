const Constant = require('../helper/constant');
const APIKEY= require('./getApiKey');
const request= require('../helper/request');

const query= { useCanonical: false,limitPerRelationshipType:10,api_key: APIKEY};

const getAnotherWords= async (word)=>{
	const url= `${Constant.baseUrl}word.json/${word}/relatedWords`;
	let object = {}
	let data = await request.get(url,query).catch((err)=>{
		return err;
	})
	data.forEach(element => {
		if(element.relationshipType==='synonym'){
			object[element.relationshipType]=element.words;
		}
		else if (element.relationshipType==='antonym'){
			object[element.relationshipType]= element.words;
		}
	});
	return object
};

module.exports = getAnotherWords;
