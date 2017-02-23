'use strict';

const _ = require('lodash');
const gulp = require('gulp');
const path = require('path');
const runSequence = require('run-sequence');

const applicationDefaultConfig = require('builder/helpers/application-default-config');
const generateApplicationJsBundle = require('builder/generators/applications/js-bundle-generator');
const HTMLBuild = require('builder/tasks/applications/html-build.js');
const ScssBuild = require('builder/tasks/applications/scss-build.js');

module.exports = function (application, id) {
    let applicationBuildTask = `${id}-build`;
    let applicationHTMLBuildTask = `${id}-html-build`;
    let applicationHTMLWatchTask = `${id}-html-watch`;
    let applicationJsBuildTask = `${id}-js-build`;
    let applicationScssBuildTask = `${id}-scss-build`;
    let applicationScssWatchTask = `${id}-scss-watch`;
    let applicationGlobalConfig = {
        buildTask: applicationBuildTask,
        tasks: {
            js: applicationJsBuildTask,
            html: applicationHTMLBuildTask,
            scss: applicationScssBuildTask
        },
        scssFiles: []
    };

    if (application.source) {
        application = _.merge({}, applicationDefaultConfig, application);

        gulp.task(applicationJsBuildTask, () => {
            return generateApplicationJsBundle(id, application);
        });

        gulp.task(applicationHTMLBuildTask, () => {
            return HTMLBuild(id, application);
        });

        gulp.task(applicationHTMLWatchTask, (cb) => {
            let source;

            if (!env.isProductionBuild()) {
                source = path.join(application.source, application.html.source);

                gulp.watch(source, [applicationHTMLBuildTask]);
            }

            return cb();
        });

        gulp.task(applicationScssBuildTask, () => {
            return ScssBuild(id, application);
        });

        gulp.task(applicationScssWatchTask, (cb) => {
            let source;

            if (!env.isProductionBuild()) {
                source = application.styles.include;
                source = source.concat(applicationGlobalConfig.scssFiles);

                if (source.length) {
                    gulp.watch(source, [applicationScssBuildTask]);
                }
            }

            return cb();
        });

        gulp.task(applicationBuildTask, (cb) => {
            runSequence(
                applicationHTMLBuildTask,
                applicationHTMLWatchTask,
                applicationJsBuildTask,
                applicationScssBuildTask,
                applicationScssWatchTask,
                cb
            );
        });

        builder.applications[id] = applicationGlobalConfig;
    }
};
