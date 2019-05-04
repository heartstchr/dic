const moment= require('moment')
const Constant = require('../helper/constant');
const APIKEY= require('./getApiKey');
const getFullDict= require('./getFullDict');
const request= require('../helper/request');
const query= { date: moment().format('yyyy-MM-dd'), api_key: APIKEY};

const getWordOfDay= async ()=>{
	let url= `${Constant.baseUrl}/wordOfTheDay`;
	let data = await request.get(url,query).catch((err)=>{
		return err;
	})
	return getFullDict(data.word);
};

module.exports = getWordOfDay;
