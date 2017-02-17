'use strict';

// VENDOR LIBS
const runSequence = require('run-sequence');

gulp.task('default', (cb) => {
    let applicationsBuild = _.map(builder.applications, (application) => {
        return application.buildTask;
    });
    let buildTasks = ['icons-build', 'fonts-build'];
    let preBuildTasks = ['clean'];
    let stream;

    if (applicationsBuild.length) {
        if (env.isProductionBuild()) {
            stream = runSequence(preBuildTasks, buildTasks, applicationsBuild, cb);
        } else {
            stream = runSequence(preBuildTasks, buildTasks, applicationsBuild, 'browser-sync', cb);
        }
    }

    return stream;
});
