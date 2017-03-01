import keyMirror from 'keymirror';

const actions = keyMirror({
    PROCESSING_REQUEST: null,
    STUDENT_SIGNED_UP: null
});
const values = {
    storeKey: 'SyncronizationStore'
};

export { actions, values };
