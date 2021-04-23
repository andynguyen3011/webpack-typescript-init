import * as actionTypes from "./actionTypes"

const initialState={
    token:null,
    user:null
}
const userReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        
        case actionTypes.SET_USER_DATA: {
            return {
                ...state,
                user: action.payload,
            }
        }
        case actionTypes.REMOVE_USER_DATA:{
            return {
                ...state
            }
        }
        case actionTypes.USER_LOGGED_OUT:{
            return {
                ...state
            }
        }
        default:
            return {...state}
    }
}
export default userReducer;