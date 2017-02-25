'use strict';

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

const errorHandler = require('builder/helpers/error-handler');
const fileCapture = require('builder/helpers/file-capture');

gulp.task('js-common-build', function () {
    let babelifyPresets = ['es2015', 'react'];
    let vendors = config.vendors;
    let destination = path.join(config.destination, vendors.destination);
    let bundler = browserify({
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

    bundler.transform(debowerify);

    _.each(vendors.libs, (lib) => {
        bundler.require(lib);
    });

    bundler = bundler.bundle();

    util.log(`Bundling \'${util.colors.cyan('vendor')}\' libs...`);

    return bundler.on('error', errorHandler)
        .pipe(source(vendors.rename))
        .pipe(buffer())
        .pipe(gulpif(env.isProductionBuild(), uglify()))
        .pipe(gulpif(!env.isProductionBuild(), sourcemaps.init({loadMaps: true})))
        .pipe(gulpif(!env.isProductionBuild(), sourcemaps.write('./')))
        .pipe(gulp.dest(destination))
        .pipe(gulpif(!env.isProductionBuild(), browserSync.reload({stream: true})));
});
