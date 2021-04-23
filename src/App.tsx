import React, { Component } from "react";
import Layout from './layout/';
import routes from './routes';
import { withRouter,Route, Switch,BrowserRouter as Router,Redirect,RouteProps  } from 'react-router-dom';
// import "./styles.css";
import { Provider } from 'react-redux';
import { isUserAuthenticated } from './helpers/authUtils';
import store from "./store"

//============ Font Awesome Css =============*
import './assets/css/font-awesome.min.css';
//============ Flag Icons Css =============*
import './assets/css/flag-icon.min.css';
//============ Themify Icons Css =============*
import './assets/css/themify-icons.css';
//============ Ionicons Css =============*
import './assets/css/ionicons.min.css';
//============ Ladda Buttons Css =============*
import './assets/css/ladda.min.css';
//============ EtLine Css =============*
import './assets/css/et-line.css';
//============ Feather Css =============*
import './assets/css/feather.css';
//============ Main App Scss =============*
import './App.scss';
import fakeBackend from './helpers/fakeBackend';

fakeBackend();

function layoutWithSidebarAndHeader(WrappedComponent:any) {
    return class extends React.Component { 
      render() {
        return <Layout>
          <WrappedComponent></WrappedComponent>
        </Layout>
      }
    };
  }
  const AuthenticatedRoute:React.FC<RouteProps> = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      isUserAuthenticated() === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )
const App = () => {
    return (
        <React.Fragment>
      <Provider store={store}>
        <Router>
        <Switch>
        {routes.map((route, idx) =>
               route.ispublic ?
                 <Route path={route.path} component={route.component}  key={idx}  />
                      : 
                 <AuthenticatedRoute path={route.path} component={layoutWithSidebarAndHeader(route.component)}  key={idx}  />
            )}
        </Switch>
        </Router>
      </Provider>
      </React.Fragment>
    );
};

export default App;