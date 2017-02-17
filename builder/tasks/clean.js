'use strict';

// VENDOR LIBS
const del = require('del');

gulp.task('clean', function() {
    return del([config.assets, config.views]);
});
