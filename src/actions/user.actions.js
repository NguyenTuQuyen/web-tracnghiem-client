import { userConstants } from "../constants";
import Promise from "es6-promise";
const storeData = [];
export function login(username, code) {
    return dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

        sendLoginRequest(username, code).then((user) => {
            dispatch(setLoginPending(false));
            dispatch(setLoginSuccess(true));
            
            storeData.push(username,code);
            localStorage.setItem('user', JSON.stringify({storeData}));
        }).catch((err) => {
            dispatch(setLoginPending(false));
            dispatch(setLoginError(err));
        });
    }
}
function setLoginPending(isLoginPending) {
    return {
        type: userConstants.LOGIN_PENDING,
        isLoginPending

    }
}
function setLoginSuccess(isLoginSuccess) {
    return {
        type: userConstants.LOGIN_SUCCESS,
        isLoginSuccess
    }
}
function setLoginError(isLoginError) {
    return {
        type: userConstants.LOGIN_ERROR,
        isLoginError
    }
}
//Gia lap bang Promise lib
function sendLoginRequest(username, code) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (username === "q" && code === "q") {
                return resolve(true);
            } else {
                return reject(new Error("Username hoặc Code không đúng!"));
            }
        },1000)
        
    })
}