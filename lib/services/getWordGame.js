const Constant = require('../helper/constant');
const APIKEY= require('./getApiKey');
const request= require('../helper/request');
const getFullDict= require('./getFullDict');
const query= { hasDictionaryDef:true,maxCorpusCount:-1,minDictionaryCount:1,maxDictionaryCount:-1,minLength:5,maxLength:-1, api_key: APIKEY};

const getWordGame= async ()=>{
	let url= `${Constant.baseUrl}/randomWord`;
	let data = await request.get(url,query).catch((err)=>{
		return err;
	})
	return getFullDict('sarcasm');
};

module.exports = getWordGame;
