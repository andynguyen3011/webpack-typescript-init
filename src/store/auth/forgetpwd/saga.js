import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

//============ Redux States for Forget Password =============*
import { FORGET_USER } from './actionTypes';
import { apiError } from './actions';

//============ Authentication Functions =============*
import { postForgetPwd } from '../../../helpers/authUtils';

//============ Dispatch Redux Actions directly =============*
function* forgetUser({ payload: { username, history } }) {
        try {
            console.log("In saga..."+username);
            const response = yield call(postForgetPwd, '/forget-pwd', {email: username});
            if(response)
               history.push('/reset-password');
        } catch (error) {
            yield put(apiError(error));
        }
}

export function* watchUserForget() {
    yield takeEvery(FORGET_USER, forgetUser)
}

function* forgetSaga() {
    yield all([fork(watchUserForget)]);
}

export default forgetSaga;