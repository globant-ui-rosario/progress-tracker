'use strict';

// VENDOR LIBS
const _ = require('lodash');
const addPath = require('app-module-path').addPath;
const glob = require('glob');
const gulp = require('gulp');
const path = require('path');
const util = require('gulp-util');

module.exports = function (config) {
    process.env.NODE_PATH = config.root;
    addPath(config.root);

    process.env.NODE_ENV = process.env.NODE_ENV || util.env.environment || 'development';

    // GLOBAL METHODS
    global._ = _;
    global.config = _.extend(require('builder/config'), config);
    global.env = {
        isProductionBuild () {
            return (this.getEnvironment() === 'production');
        },
        getEnvironment () {
            return process.env.NODE_ENV;
        },
        getPath () {
            return process.env.NODE_PATH;
        }
    };
    global.gulp = gulp;
    global.glob = glob;
    global.path = path;
    global.util = util;
    global.builder = {
        applications: {}
    };
};
