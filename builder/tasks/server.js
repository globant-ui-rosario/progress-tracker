'use strict';

const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('server', () => {
    nodemon({
        script: config.server.src,
        watch: config.server.watch
    });
});
