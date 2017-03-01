import dispatcher from 'libs/flux/dispatcher';
import { actions, values } from 'app-course-sync/stores/syncronizationConstants';
import endpoints from 'app-course-sync/endpoints';

export default function (config) {
    const storeKey = values.storeKey;
    const data = {

    };

    dispatcher.dispatch({
        store: storeKey,
        type: actions.PROCESSING_REQUEST
    });

    endpoints.signUpStudent(data)
        .then(() => {
            dispatcher.dispatch({
                store: storeKey,
                type: actions.STUDENT_SIGNED_UP
            });
        })
        .catch((error) => {

        })
        .then(() => {
            dispatcher.dispatch({
                store: storeKey,
                type: actions.REQUEST_COMPLETED
            });
        });
};
