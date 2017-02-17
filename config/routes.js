module.exports.routes = {

    'GET /app*': {
        fn: function(request, response, next) {
            response.sendfile(sails.config.appPath + '/dist/views/app/index.html');
        }
    }
};
