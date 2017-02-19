'use strict';

gulp.task('icons-build', function (cb) {
    let assetsFolder = config.assets;
    let destination;
    let iconsPaths;
    let iconsDestination = config.icons.destination;

    if (iconsDestination) {
        destination = path.join(config.destination, assetsFolder, iconsDestination);
        iconsPaths = [path.join(env.getPath(), 'node_modules/material-design-icons/iconfont/*')];

        return gulp.src(iconsPaths).pipe(gulp.dest(destination));
    } else {
        return cb();
    }
});
