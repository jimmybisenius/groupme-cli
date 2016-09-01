var prompt = require('prompt');
var chalk = require('chalk');
var groupSelect = require('./group-select');

module.exports = function() {
	console.log("We see it's your first time using groupme-cli, let's get you setup.");
	prompt.start();
	prompt.get(['Access Token'], function(err, result) {
		if(err) return console.log(err);
		process.env.GROUPME_ACCESS_TOKEN = result['Access Token'];
		return groupSelect();
	});
};
