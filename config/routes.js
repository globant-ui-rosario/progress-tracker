module.exports.routes = {

    'GET r|^(?!\/src|\/icons|\/fonts).*$|': {
        fn: function(request, response, next) {
            response.sendfile(sails.config.appPath + '/dist/index.html');
        }
    }
};
