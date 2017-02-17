'use strict';

const transformTools = require('browserify-transform-tools');

module.exports = transformTools.makeRequireTransform('scss-capture',
    {
        evaluateArguments: true
    },
    function (args, opts, cb) {
        let config = opts.config;
        let extension = config.extension;
        let file = args[0];
        let filesCollection = config.filesCollection;

        filesCollection.push(file + extension);

        return cb();
    }
);
