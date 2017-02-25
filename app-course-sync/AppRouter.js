import { browserHistory, Router } from 'react-router';
import { render } from 'react-dom';
import React from 'react';

class AppRouter {

    constructor (routes) {
        this.routes = routes;
    }

    run () {
        const mountPoint = document.getElementById('mount-point');

        render(<Router history={browserHistory}>{this.routes}</Router>, mountPoint);
    }
};

export default AppRouter;
