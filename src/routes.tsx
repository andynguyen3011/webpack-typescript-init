


// ------ Auth Pages ------- 
import Pageslogin from './pages/Auth/Login';
import Dashboard from './pages/Dashboard/Dashboard';

// import ForgetPassword from './pages/Auth/ForgetPassword';
// import LockScreen from './pages/Auth/Lock';
// import ResetPassword from './pages/Auth/ResetPassword';
import Logout from './pages/Auth/Logout';

const routes = [

    //=====================================
    //            Public Routes
    //=====================================
    { path: '/login', component: Pageslogin, ispublic: true },
    { path: '/logout', component: Logout, ispublic: true },
    // { path: '/register', component: Pagesregister, ispublic: true },
    // { path: '/forget-password', component: ForgetPassword, ispublic: true },
    // { path: '/lock', component: LockScreen, ispublic: true },
    // { path: '/reset-password', component: ResetPassword, ispublic: true },
  //=====================================
    //            Dashboard
    //=====================================
    { path: '/dashboard', component: Dashboard },
]

export default routes;