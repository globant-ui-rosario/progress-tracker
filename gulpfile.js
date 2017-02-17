'use strict';

const builder = require('./builder')({
    assets: 'dist/assets',
    views: 'dist',
    root: __dirname,
    server: {
        host: 'localhost',
        port: '1337',
        destinationPort: '8080',
        src: 'server.js',
        watch: [
            'server.js',
            'server/api/*',
            'server/config/*',
        ]
    }
});
