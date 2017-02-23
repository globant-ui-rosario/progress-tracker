'use strict';

const gulp = require('gulp');
const path = require('path');

gulp.task('icons-build', function (cb) {
    let destination;
    let iconsPaths;
    let iconsDestination = config.icons.destination;

    if (iconsDestination) {
        destination = path.join(config.assets, iconsDestination);
        iconsPaths = [path.join(env.getPath(), 'node_modules/material-design-icons/iconfont/*')];

        return gulp.src(iconsPaths).pipe(gulp.dest(destination));
    } else {
        return cb();
    }
});
