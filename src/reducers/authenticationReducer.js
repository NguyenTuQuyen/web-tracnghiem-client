import { userConstants } from "../constants";

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? {
    loginIn: true,
    user
} : {};
export function authenticationReducer(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_SUCCESS:
            return {
                loginIn: true,
                user: action.user
            }
        case userConstants.LOGIN_PENDING:
            return {
                loginIn: true,
                user: action.user
            }
        case userConstants.LOGIN_ERROR:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state
    }

}