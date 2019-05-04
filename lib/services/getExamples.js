const Constant = require('../constant');
const APIKEY= require('./getApiKey');
const request= require('./request');

const getDefinations= (word)=>{
	let url= `${Constant.baseUrl}${word}/examples`;
	let options= { limit: 200,includeRelated: false,useCanonical: false,includeTags: false,api_key: APIKEY};
	return request.get(url,options);
};

module.exports = getDefinations;
