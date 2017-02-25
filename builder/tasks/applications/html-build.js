'use strict';

// VENDOR LIBS
const browserSync = require('browser-sync');
const gulpif = require('gulp-if');
const handlebars = require('gulp-compile-handlebars');

module.exports = function (id, application) {
    let applicationScripts = application.scripts;
    let applicationStyles = application.styles;
    let assetsFolder = config.assets;
    let destination = application.destination;
    let source = application.source;
    let htmlSource = application.html.source;
    let htmlDestination = path.join(config.destination, destination);
    let scriptsDestinationFolder = applicationScripts.destination;
    let stylesDestinationFolder = applicationStyles.destination;
    let scriptsRename = applicationScripts.rename;
    let stylesRename = applicationStyles.rename;

    source = path.join(source, htmlSource);

    return gulp.src(source)
        .pipe(handlebars({
            scriptsPath: path.join('/', destination, scriptsDestinationFolder, scriptsRename),
            stylesPath: path.join('/', destination, assetsFolder, stylesDestinationFolder, stylesRename)
        }))
        .pipe(gulp.dest(htmlDestination))
        .pipe(gulpif(!env.isProductionBuild(), browserSync.reload({stream: true})));
};
