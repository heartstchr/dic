const moment= require('moment')
const Constant = require('../helper/constant');
const APIKEY= require('./getApiKey');
const getFullDict= require('./getFullDict');
const request= require('../helper/request');

const getWordOfDay= async ()=>{
	let url= `${Constant.baseUrl}words.json/wordOfTheDay`;
	let data = await request.get(url,{ date: moment().format('YYYY-MM-DD'), api_key: APIKEY}).catch((err)=>{
		return err;
	})
	return getFullDict(data.word);
};

module.exports = getWordOfDay;
