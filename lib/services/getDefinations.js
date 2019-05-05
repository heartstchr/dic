const Constant = require('../helper/constant');
const APIKEY= require('./getApiKey');
const request= require('../helper/request');
const query= { limit: 200,includeRelated: false,useCanonical: false,includeTags: false,api_key: APIKEY};
const getDefinations= async (word)=>{
	let url= `${Constant.baseUrl}word.json/${word}/definitions`;
	let result = [];
	let data = await request.get(url,query).catch((err)=>{
		return err;
	})
	data.forEach((element,index) => {
		result.push(`${index+1}. ${element.text}`)
	});
	return result
};

module.exports = getDefinations;
