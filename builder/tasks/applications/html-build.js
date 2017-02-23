'use strict';

const browserSync = require('browser-sync');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const handlebars = require('gulp-compile-handlebars');
const path = require('path');

module.exports = function (id, application) {
    let applicationScripts = application.scripts;
    let applicationStyles = application.styles;
    let destination = application.destination;
    let source = application.source;
    let htmlSource = application.html.source;
    let viewsFolder = config.views;
    let htmlDestination = path.join(viewsFolder, destination);
    let scriptsDestinationFolder = applicationScripts.destination;
    let stylesDestinationFolder = applicationStyles.destination;
    let scriptsRename = applicationScripts.rename;
    let stylesRename = applicationStyles.rename;

    source = path.join(source, htmlSource);

    return gulp.src(source)
        .pipe(handlebars({
            scriptsPath: path.join('/src', destination, scriptsDestinationFolder, scriptsRename),
            stylesPath: path.join('/src', destination, stylesDestinationFolder, stylesRename)
        }))
        .pipe(gulp.dest(htmlDestination))
        .pipe(gulpif(!env.isProductionBuild(), browserSync.reload({stream: true})));
};
