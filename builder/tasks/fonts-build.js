'use strict';

const gulp = require('gulp');
const path = require('path');

gulp.task('fonts-build', function (cb) {
    let destination;
    let fontsDestination = config.fonts.destination;
    let fontsPaths;
    let fontsSource = config.fonts.source;

    if (fontsDestination) {
        destination = path.join(config.assets, fontsDestination);
        fontsPaths = path.join(fontsSource, '**/*');

        return gulp.src(fontsPaths).pipe(gulp.dest(destination));
    } else {
        return cb();
    }
});
