module.exports.routes = {

    'GET r|^(?!\/scripts|\/assets).*$|': {
        fn: function(request, response, next) {
            response.sendfile(sails.config.appPath + '/dist/index.html');
        }
    }
};
