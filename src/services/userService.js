import callApi from "../utils/callApi";
import { authHeader } from '../helpers';

export const userService = {
    login,
    logout,
    getAll,
    getById
    
};

function login(username, code) {
    const requestOptions = {
        method: 'POST',
        
        body: JSON.stringify({ username, code })
    };

    return callApi("users/authenticate", requestOptions)
        .then(handleResponse)
        .then(user => {
            
            if (user.token) {
                 // luu jwt token va thong tin user vao localStorage
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}


function logout(){
    localStorage.removeItem("user");
}
function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return callApi("users", requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return callApi(`users/${id}`, requestOptions).then(handleResponse);
}



function handleResponse(response) {
    return response.json().then(data => {
        if (!response.ok) {
            if (response.status === 401) {
                logout();
                window.location.reload(true);
            }
            const error = (data && data.error) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    })
}