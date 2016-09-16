var env = process.env.NODE_ENV || 'development';
var config = require('./webpack.' + env + '.config.js');

module.exports = config;
