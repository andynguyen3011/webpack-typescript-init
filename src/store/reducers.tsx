import { combineReducers  } from 'redux';
import Layout from './layout/reducer';

//============ Auth Reducers =============*
import Login from './auth/login/reducer';
import Forget from './auth/forgetpwd/reducer';
// User reducer
import User from './user/reducer';

const rootReducer = combineReducers({ Layout, Login, Forget ,User});

export default rootReducer;