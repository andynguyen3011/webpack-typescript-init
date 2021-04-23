import * as actionTypes from "./actionTypes"


export const setUserData=(user)=>{
    return {
        type: actionTypes.SET_USER_DATA,
        payload: user
    }
}

export const removeUserData=(user)=>{
    localStorage.removeItem('user');
    setUserData({token:null,info:null})
    return {
        type : actionTypes.USER_LOGGED_OUT,  
    }
}




