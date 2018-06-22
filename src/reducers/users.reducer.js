import { userConstants } from "../constants";

export function users(state = {
    isLoginPending: false,
    isLoginSuccess: false,
    isLoginError:null
},action){
    switch(action.type){
        case userConstants.LOGIN_SUCCESS:
        return {
           ...state ,
            isLoginSuccess: action.isLoginSuccess
        }
        case userConstants.LOGIN_PENDING:
        return{
            ...state,
            isLoginPending: action.isLoginPending
        }
        case userConstants.LOGIN_ERROR:
        return{
            ...state,
            isLoginError: action.isLoginError
        }
        default:
        return state; 
    }
}