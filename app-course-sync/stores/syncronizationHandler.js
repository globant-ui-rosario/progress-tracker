import { actions } from 'app-course-sync/stores/sincronizationConstants';

export default function (action, state) {
    let data = action.data;

    if (action.type === actions.PROCESSING_REQUEST) {
        state.processing = true;
    }

    return state;
};
