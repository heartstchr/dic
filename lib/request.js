const superagent = require('superagent');
const chalk = require('chalk');

const get= async (url,options)=>{
	console.log('getting...')
		try {
		  const res = await superagent.get(url)
		  .query(options);
		  const explanation= res.body.explanation;
			if (res.body.message){
				return res.body;
			}
			return console.log(
				chalk.green(
					{url,explanation}
				)
			);
		} catch (err) {
			console.log(
				chalk.red(
					err.message
				)
			);
		  	return err;
		}
};

module.exports = {get};
