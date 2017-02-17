'use strict';

module.exports = function (config) {
    require('./env')(config);

    // BUILDER
    const fontsDefaultConfig = require('builder/helpers/fonts-default-config');
    const iconsDefaultConfig = require('builder/helpers/icons-default-config');

    // GENERATORS
    const applicationBuildGenerator = require('builder/generators/application-build-generator');

    return (function () {
        let tasks = glob.sync(path.join(__dirname, 'tasks/*.js'));
        let applications = require('applications') || {};

        if (config.assets) {
            global.config.fonts = _.merge({}, fontsDefaultConfig, config.fonts);
            global.config.icons = _.merge({}, iconsDefaultConfig, config.icons);

            _.each(tasks, (task) => {require(task);});
            _.each(applications, applicationBuildGenerator);
        }
    })();
};
