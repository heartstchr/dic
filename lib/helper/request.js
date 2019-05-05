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
					try{
						let obj= JSON.parse(body)
						if(obj.message){
							return console.log(body.message);
						}else{
							return resolve(obj);
						}
						
					} catch (e) {
						console.log('url--->',url)
						console.log('query--->',query)
						console.log('body--->',body)
						throw new Error('Not a valid JSON from wordnik');
					}
				})
			})
		} catch (err) {
			throw new Error(error);
		}
};






module.exports = {get};
