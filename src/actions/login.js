export const LOGIN_REQUEST = 'LOGIN_REQUEST';

export const login = (credentials) => ({
    type: LOGIN_REQUEST,
    payload: credentials,
});