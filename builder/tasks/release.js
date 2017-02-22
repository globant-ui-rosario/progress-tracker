'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');
const util = require('gulp-util');

gulp.task('release', () => {
    process.env.NODE_ENV = util.env.environment || 'production';

    runSequence('default', 'server');
});
