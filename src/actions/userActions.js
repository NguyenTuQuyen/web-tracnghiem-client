import { userConstants } from "../constants";
import { userService } from '../services';
import {alertActions} from "../actions"

export const userActions = {
    login,
    logout,
    getAll
}
function login(username, code) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, code)
            .then(
                user => { 
                    dispatch(success(user));
                   
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_PENDING, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_ERROR, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}
function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}
