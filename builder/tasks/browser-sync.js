'use strict';

// VENDOR LIBS
const browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    let destinationPort = _.get(config.server, 'destinationPort', '8080');
    let host = _.get(config.server, 'host', 'localhost');
    let port = _.get(config.server, 'port', '8000');

    browserSync.init({
        proxy: host + ':' + port,
        port: destinationPort
    });
});
