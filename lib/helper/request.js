var request = require("request");

const get=  (url,query)=>{
		try {
			return new Promise(function(resolve, reject) {
				// Do async job
				request({ method: 'GET',
					url: url,
					qs:query 
				},(error,res,body)=>{
					if (error) throw new Error(error);
					return resolve(body);
				})
			})
		} catch (err) {
			throw new Error(error);
		}
};






module.exports = {get};
