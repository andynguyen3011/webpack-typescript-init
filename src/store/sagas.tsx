import { all } from 'redux-saga/effects'

import loginSaga from './auth/login/saga';
 import forgetSaga from './auth/forgetpwd/saga';

export default function* rootSaga() {
    yield all([ loginSaga(), forgetSaga()]);
}