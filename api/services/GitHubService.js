const fs = require('fs');
const axios = require('axios');

const ACCESS_TOKEN_URL = 'https://github.com/login/oauth/access_token';

module.exports ={
	exchangeToken: function (options, cb){
		options.client_id = '6802d8ea346fc5b80796';
		options.client_secret = '93ec7f23e1c044563c47e8091ddcae2790079b88';
		options.state = 'placeholder';
		let config = {
			headers: {
				'Accept': 'application/json'
			}
		};
		axios.post(ACCESS_TOKEN_URL, options, config)
			.then(function (res){
				console.log(res.data);
				//TODO: Write to DB
				fs.writeFileSync('tst_token', res.data.access_token);
				if(cb){
					cb();
				}
			});
	},
	
};