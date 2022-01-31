export const LOCALHOST = 'http://localhost:3000/api/users/';
export const PROD = 'http://localhost:3000/api/users/';

export const URL = PROD;

export const serverAlive = URL + 'serverAlive';
export const login = URL + 'authenticate';
export const signUp = URL + 'register';

const URLPath = {
    serverAlive,
    login,
    signUp
};



export default URLPath;