'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('js-lint', function () {
    return gulp.src(['**/*.js', '!node_modules/**', '!dist/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
