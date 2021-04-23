import React, { Component,useState,useEffect } from 'react';
import { Button, Col, Row, Alert } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux"
import { checkLogin } from '../../store/actions';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import loginLogo from "../../assets/images/logo-login.svg";
// const loginLogo = require('../../assets/images/logo-login.svg')
import { useHistory } from "react-router-dom";
function Login() {
    const [username,setUser]=useState("admin")
    const [password,setPassword]=useState("admin")
    const {loginError,loading} = useSelector((state:any) => ({
       
        loginError:state.loginError,
        loading:state.loading
    }))
    const {user} = useSelector((state:any) => ({
        user:state.user
    }))
   
    const history=useHistory()
    const dispatch = useDispatch();
    const dispatchLogin = (username:any,password:any,history:any) => dispatch(checkLogin(username,password,history));
    const handleSubmit=(event:any, values:any)=> {
        console.log("HISTORY",history)
        dispatchLogin (values.username, values.password,history );
        
     }
 
   
    return (
        <React.Fragment>

        <div className="wrapper">
            <div className="container-fluid">
                <Row>
                    <div className="login-bg" >
                        <div className="login-overlay"></div>
                       <div className="login-left">
                            <img src={loginLogo} alt="Logo" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tellus elit.</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>

                    <div className="login-form">
                        
                        <AvForm id="login_form_sec" onValidSubmit={handleSubmit} >
                            <div className="login-form-body">
                                {user && <Alert color="success">
                                    Your Login is successfull.</Alert>}

                                {loginError && <Alert color="danger">
                                {loginError}</Alert>}

                                <div>
                                    {/* <AvField name="email" label="Email" value={email} placeholder="Enter Email Address" validate={{email: true}} type="text" required /> */}
                                    <AvField name="username" label="Username" value={username} placeholder="Enter username"  type="text" required />
                                </div>
                                <div className="mb-2">
                                    <AvField name="password" label="Password" value={password} placeholder="Enter Password" type="password" required />
                                </div>
                                <div className="form-footer text-right">
                                    <p className="text-muted"><Link to="/forget-password"><i className="mdi mdi-lock"></i> Forgot Password?</Link></p>
                                </div>

                                
                                <div className="submit-btn-area">
                                    <Button color="primary" className="btn btn-primary" type="submit">Log In <i className="ti-arrow-right"></i></Button>
                                    <div className="login-other row mt-4">
                                        <Col sm="6">
                                            <button className="fb-login"><span className="login_txt">Log in with</span>  <i className="fa fa-facebook"></i></button>
                                        </Col>
                                        <Col sm="6">
                                            <button className="google-login"><span className="login_txt">Log in with</span>  <i className="fa fa-google"></i></button>
                                        </Col>
                                    </div>
                                </div>
                                <div className="form-footer text-center mt-5">
                                    <p className="text-muted">Don't have Account? <Link to="/register"><i className="mdi mdi-lock"></i> Register Now</Link></p>
                                </div>
                            </div>
                        </AvForm>
                   
                    </div>
              
                </Row>
            
            </div>
    
        </div>
    
    </React.Fragment>

    )
}

export default Login;