import App from 'libs/app-core/App';
import routes from 'app-course-sync/routes';
import services from 'libs/services/services';
import servicesConfig from 'app-course-sync/config/servicesConfig';

export default new App({
    routes: routes
}, bootstrap);

function bootstrap (bootstrapFinished) {
    services.initialize(servicesConfig);

    bootstrapFinished();
}
