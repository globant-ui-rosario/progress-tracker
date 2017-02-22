var rc = require('rc');

process.chdir(__dirname);

var sails = require('sails');

sails.lift(rc('sails'));
