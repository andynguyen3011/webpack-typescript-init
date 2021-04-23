import { takeEvery, fork, put, all, call } from 'redux-saga/effects';
//============ Redux States for Login =============*
import { CHECK_LOGIN } from './actionTypes';
import {  apiError, loginUserSuccessful } from './actions';
//============ Authentication Functions =============*
import { userSetInLocalStorage,postLogin } from '../../../helpers/authUtils';
import { setUserData } from "../../actions";

//============ Dispatch Redux Actions directly =============*
function* loginUser({ payload: { username, password, history } }) {
    try {
        const response = yield call(postLogin, '/post-login', {username: username, password: password});
            userSetInLocalStorage(response);
            console.log("response",response)
            yield put(setUserData(response));
        history.push('/dashboard');
    } catch (error) {
        yield put(apiError(error));
    }
}

export function* watchUserLogin() {
    yield takeEvery(CHECK_LOGIN, loginUser)
}

function* loginSaga() {
    yield all([fork(watchUserLogin)]);
}

export default loginSaga;