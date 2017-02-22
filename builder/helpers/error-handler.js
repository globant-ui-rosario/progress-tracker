'use strict';

const notify = require('gulp-notify');

module.exports = function () {

    if (!global.production) {
        let args = Array.prototype.slice.call(arguments);

        notify.onError({
            title: 'Compile Error',
            message: '<%= error.message %>'
        }).apply(this, args);

        this.emit('end');
    } else {
        process.exit(1);
    }
};
