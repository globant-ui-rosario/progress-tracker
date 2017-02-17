'use strict';

// VENDOR LIBS
const runSequence = require('run-sequence');

gulp.task('release', () => {
    process.env.NODE_ENV = util.env.environment || 'production';

    runSequence('default', 'server');
});
