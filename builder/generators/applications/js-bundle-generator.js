'use strict';

// VENDOR LIBS
const babelify = require('babelify');
const browserify = require('browserify');
const browserSync = require('browser-sync');
const buffer = require('vinyl-buffer');
const debowerify = require('debowerify');
const envify = require('envify');
const gulpif = require('gulp-if');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const watchify = require('watchify');

// BUILDER
const errorHandler = require('builder/helpers/error-handler');
const fileCapture = require('builder/helpers/file-capture');

module.exports = function (id, application) {
    let applicationScripts = application.scripts;
    let applicationSource = application.source;
    let babelifyPresets = ['es2015', 'react'];
    let scriptSource = applicationScripts.source;

    let bundler = browserify({
        entries: [path.join(applicationSource, scriptSource)],
        debug: !env.isProductionBuild(),
        cache: {},
        packageCache: {},
        fullPaths: true
    });

    bundler.transform(babelify, {
        presets: babelifyPresets
    });
    bundler.transform(envify, {
        NODE_ENV: env.getEnvironment()
    });
    bundler.transform(fileCapture, {
        filesCollection: builder.applications[id].scssFiles,
        extension: '.scss'
    });

    let bundle = function () {
        let stream = bundler.bundle();
        let applicationDestinationFolder = application.destination;
        let scriptsDestinationFolder = applicationScripts.destination;
        let fileDestinationName = applicationScripts.rename;
        let destination = path.join(config.destination, applicationDestinationFolder, scriptsDestinationFolder);

        util.log(`Bundling \'${util.colors.cyan(id)}\' application...`);

        return stream.on('error', errorHandler)
            .pipe(source(fileDestinationName))
            .pipe(buffer())
            .pipe(gulpif(env.isProductionBuild(), uglify()))
            .pipe(gulpif(!env.isProductionBuild(), sourcemaps.write('./')))
            .pipe(gulp.dest(destination))
            .pipe(gulpif(!env.isProductionBuild(), browserSync.reload({stream: true})));
    };

    if (!env.isProductionBuild()) {
        bundler = watchify(bundler);
        bundler.on('update', bundle);
    }

    bundler.transform(debowerify);

    bundler.external(config.vendors.libs);

    return bundle();
};
