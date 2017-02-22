module.exports.routes = {

    'GET r|^(?!\/src|\/icons|\/fonts).*$|': {
        fn: function(request, response) {
            response.sendfile(sails.config.appPath + '/dist/index.html');
        }
    }
};
