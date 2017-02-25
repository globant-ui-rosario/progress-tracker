'use strict';

gulp.task('fonts-build', function (cb) {
    let assetsFolder = config.assets;
    let destination;
    let fontsDestination = config.fonts.destination;
    let fontsPaths;
    let fontsSource = config.fonts.source;

    if (fontsDestination) {
        destination = path.join(config.destination, assetsFolder, fontsDestination);
        fontsPaths = path.join(fontsSource, '**/*');

        return gulp.src(fontsPaths).pipe(gulp.dest(destination));
    } else {
        return cb();
    }
});
