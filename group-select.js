var chalk = require('chalk');
var API = require('./api');

module.exports = function() {
	API.groups.get();
};
