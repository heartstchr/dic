const superagent = require('superagent');
const get= (url,options)=>{
	superagent.get(url)
		.query(options)
		.end((err, res) => {
			if (err) { return err; }
			const url = res.body.url;
			const explanation= res.body.explanation;
			return {url,explanation};
		});
};

module.exports = {get};
