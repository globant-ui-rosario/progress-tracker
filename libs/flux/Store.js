import { EventEmitter } from 'events';
import _ from 'lodash';
import dispatcher from 'libs/flux/dispatcher';

class Store extends EventEmitter {

    constructor (storeKey, handler) {
        super();

        this.storeKey = storeKey;
        this.handler = handler;
        this.state = this.getInitialState();

        dispatcher.register(this.handleDispatch.bind(this));
    }

    setState (state, callback) {
        _.extend(this.state, state);

        if (callback) {
            callback();
        }
    }

    getInitialState () {
        return {};
    }

    addChangeListener (callback) {
        this.addEventListener('change', callback);
    }

    addEventListener (event, callback) {
        this.on(event, callback);
    }

    removeChangeListener (callback) {
        this.removeEventListener('change', callback);
    }

    removeEventListener (event, callback) {
        this.removeListener(event, callback);
    }

    handleDispatch (action) {
        let state;

        if (action.store === this.storeKey) {
            state = _.extend({}, this.state);

            this.setState(this.handler(action, state));
        }
    }
};

export default Store;
