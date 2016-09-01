var rp = require('request-promise');
var Table = require('cli-table2');
var prompt = require('prompt');
var options, date, time, minutes, hours;

module.exports = {
	groups: {
		get: function() {
			options = {
				uri: GLOBAL.config.API_URL + '/groups',
				qs: {
					token: process.env.GROUPME_ACCESS_TOKEN
				},
				json: true
			};
			rp(options)
				.then(function(body) {
					//console.log(body.response);
					var table = new Table({
						head: ['Group Name','Updated'],
						colWidths: [50, 10]
					});
					for(i = 0; i < body.response.length; i++) {
						date = new Date(body.response[i].updated_at * 1000);
						hours = date.getHours();
						minutes = "0" + date.getMinutes();
						minutes = minutes.substr(-2);
						half = " AM";
						if(hours > 12) {
							half= " PM";
							hours-=12;
							hours = "0" + hours;
							hours = hours.substr(-2);
						}
						if(hours < 10 && half == " AM") hours = "0" + hours;
						time = hours + ":" + minutes + half;
						table.push([body.response[i].name, time]);
					}
					console.log(table.toString());
					prompt.start();
					prompt.get(['Group Name'], function(err, result) {
						if(err) return console.log(err);
						console.log(result['Group Name'] + " was chosen");
					});
				});
		}
	}
};
