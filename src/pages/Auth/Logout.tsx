import React, { Component, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import { connect ,useDispatch } from 'react-redux';
import { activateNonAuthLayout, removeUserData } from '../../store/actions';

import { useHistory } from "react-router";


function Logout() {
    const dispatch = useDispatch()
    const history=useHistory();
    useEffect(() => {
        dispatch(activateNonAuthLayout())
        dispatch(removeUserData())
        // localStorage.removeItem('user');
        history.push('/login');
    }, [])
    
    return (
        <div>
            
        </div>
    )
}

export default Logout

