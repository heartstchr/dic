const Constant = require('../constant');
const APIKEY= require('./getApiKey');
const request= require('../request');
const getFullDict= require('./getFullDict');
const options= { hasDictionaryDef:true,maxCorpusCount:-1,minDictionaryCount:1,maxDictionaryCount:-1,minLength:5,maxLength:-1, api_key: APIKEY};

const getWordGame= ()=>{
	let url= `${Constant.baseUrl}/randomWord`;
	let data = request.get(url,options);
	return getFullDict(data.word);
};

module.exports = getWordGame;
