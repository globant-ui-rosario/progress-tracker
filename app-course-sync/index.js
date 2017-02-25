import AppRouter from 'app-course-sync/AppRouter';
import routes from 'app-course-sync/routes';

const router = new AppRouter(routes);

router.run();
