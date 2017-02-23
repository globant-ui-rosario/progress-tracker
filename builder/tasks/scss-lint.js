'use strict';

const gulp = require('gulp');
const sassLint = require('gulp-sass-lint');

gulp.task('scss-lint', function () {
    return gulp.src(['**/*.scss', '!node_modules/**'])
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
});
