var rc = require('rc')
var path = require('path');

process.chdir(__dirname);

var sails = require('sails');

sails.lift(rc('sails'));
