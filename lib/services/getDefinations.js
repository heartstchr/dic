const Constant = require('../constant');
const APIKEY= require('./getApiKey');
const request= require('../request');

const getDefinations= (word)=>{
	let url= `${Constant.baseUrl}${word}/definitions`;
	let options= { limit: 200,includeRelated: false,useCanonical: false,includeTags: false,api_key: APIKEY};
	let data = request.get(url,options);
	return data ;
};

module.exports = getDefinations;
