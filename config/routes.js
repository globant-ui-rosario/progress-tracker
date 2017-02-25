module.exports.routes = {

    'GET r|^(?!\/scripts|\/assets|\/course-sync\/scripts|\/course-sync\/assets).*$|': {
        fn: function (request, response, next) {
            let url = request.url;
            let firstDashIndex = request.url.indexOf('/', 1);
            let applicationDirectory;

            if (firstDashIndex !== -1) {
                applicationDirectory = url.substr(0, firstDashIndex);
            } else {
                applicationDirectory = request.url;
            }

            response.sendfile(sails.config.appPath + '/dist' + applicationDirectory + '/index.html');
        }
    }
};
