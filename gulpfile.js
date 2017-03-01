'use strict';

const builder = require('./builder')({
    destination: 'dist',
    assets: 'assets',
    root: __dirname,
    server: {
        host: 'localhost',
        port: '1337',
        destinationPort: '8080',
        src: 'server.js',
        watch: [
            'server.js',
            'api/*',
            'config/*',
        ]
    },
    vendors: {
        libs: [
            'axios',
            'classnames',
            'flux',
            'lodash',
            'messageformat',
            'moment',
            'react',
            'react-dom',
            'react-router'
        ]
    }
});
