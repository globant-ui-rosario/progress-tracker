import Store from 'libs/flux/Store';
import syncronizationHandler from 'app-course-sync/stores/syncronizationHandler';
import { values } from 'app-course-sync/stores/syncronizationConstants';

class SyncronizationStore extends Store {

    constructor () {
        super(values.storeKey, syncronizationHandler);
    }

    getInitialState () {
        return {

        };
    }
};

export default new SyncronizationStore();
