import { URLPath } from '../services';

function login(user) {

    return fetch(
        URLPath.login, {
        method: 'POST',
        headers: setHeader(),
        body: JSON.stringify(user)
    })
        .then((response) => response.json())
        .then((json) => {
            return json
        })
        .catch((error) => {
            return error;
        });

};

function signUp(newUser) {

    return fetch(
        URLPath.signUp, {
        method: 'POST',
        headers: setHeader(),
        body: JSON.stringify(newUser)
    })
        .then((response) => response.json())
        .then((json) => {
            return json
        })
        .catch((error) => {
            return error;
        });

};

function setHeader(token) {

    let headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    }

    return headers

}

const authService = {
    login,
    signUp
};

export default authService;