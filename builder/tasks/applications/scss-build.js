'use strict';

// VENDOR LIBS
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const cssmin = require('gulp-minify-css');
const errorHandler = require('builder/helpers/error-handler');
const gulpif = require('gulp-if');
const sass = require('gulp-sass');

module.exports = function (id, application) {
    let applicationDestinationFolder = application.destination;
    let applicationStyles = application.styles;
    let cssDestinationFolder = applicationStyles.destination;
    let assetsFolder = config.assets;
    let rename = applicationStyles.rename;
    let destination = path.join(config.destination, applicationDestinationFolder, assetsFolder, cssDestinationFolder);
    let scssFiles = applicationStyles.include;

    return gulp.src(scssFiles.concat(builder.applications[id].scssFiles))
        .pipe(sass({
            outputStyle: 'nested'
        }))
        .pipe(concat(rename))
        .on('error', errorHandler)
        .pipe(gulpif(env.isProductionBuild(), cssmin()))
        .pipe(gulp.dest(destination))
        .pipe(gulpif(!env.isProductionBuild(), browserSync.reload({stream: true})));
};
