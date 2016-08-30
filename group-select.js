var chalk = require('chalk');
var groupme = require('groupme');
var API = require('groupme').Stateless;

module.exports = function() {
	API.Groups.index(process.env.GROUPME_ACCESS_TOKEN, function(groups) {
		console.log(groups);
		console.log('done!');
	});
};
