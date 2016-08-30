// Created by Jimmy Bisenius in 2016
// Third Party Dependencies
var groupme = require('groupme');
var chalk = require('chalk');

// First Party Dependencies
var setup = require('./setup');
var appInfo = require('./package.json');
var groupSelect = require('./group-select');

console.log(chalk.gray.bgCyan(' groupme-cli ') + " v" + appInfo.version + " | Built by Jimmy Bisenius");
if(!process.env['GROUPME_ACCESS_TOKEN']) return setup();
return groupSelect();
