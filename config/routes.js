module.exports.routes = {

	'GET /token': {
		fn: function(request, response, next) {
            response.sendfile(sails.config.appPath + '/tst/link.html');
        }
    },
	'/token/response*': 'Tst.logToken',
    'GET r|^(?!\/src|\/icons|\/fonts).*$|': {
        fn: function(request, response, next) {
            response.sendfile(sails.config.appPath + '/dist/index.html');
        }
    }
};
