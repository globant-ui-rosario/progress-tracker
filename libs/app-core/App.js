import { browserHistory, Router } from 'react-router';
import { render } from 'react-dom';
import React from 'react';

class App {

    constructor (config, bootstrap) {
        this.routes = config.routes;

        if (bootstrap) {
            bootstrap(this.bootstrapFinished.bind(this));
        } else {
            this.bootstrapFinished();
        }
    }

    run () {
        const mountPoint = document.getElementById('mount-point');

        render(<Router history={browserHistory}>{this.routes}</Router>, mountPoint);
    }

    bootstrapFinished () {
        this.run();
    }
};

export default App;
