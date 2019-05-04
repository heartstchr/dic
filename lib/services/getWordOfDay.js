const moment= require('moment')
const Constant = require('../constant');
const APIKEY= require('./getApiKey');
const request= require('../request');
const options= { date: moment().format('yyyy-MM-dd'), api_key: APIKEY};

const getWordOfDay= (word)=>{
	let url= `${Constant.baseUrl}/wordOfTheDay`;
	let data = request.get(url,options);
	return data ;
};

module.exports = getWordOfDay;
