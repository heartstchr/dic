const Constant = require('../helper/constant');
const APIKEY= require('./getApiKey');
const request= require('../helper/request');
const query= { limit: 200,includeRelated: false,useCanonical: false,includeTags: false,api_key: APIKEY};
const getDefinations= async (word)=>{
	let url= `${Constant.baseUrl}${word}/definitions`;
	let data = await request.get(url,query).catch((err)=>{
		return err;
	})
	return data
};

module.exports = getDefinations;
