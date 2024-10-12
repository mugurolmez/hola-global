export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

export const registerSuccess = (userData) => ({
    type: REGISTER_SUCCESS,
    payload: userData
});
export const registerError = (error) => ({
    type: REGISTER_ERROR,
    payload: error
});


export const loginSuccess = (data) => ({

    type: LOGIN_SUCCESS,
    payload: data,
});
export const loginError = (error) => ({

    type: LOGIN_ERROR,
    payload: error,
});

// Kullanıcı çıkış işlemi

export const logout = () => ({
    type: LOGOUT,
});
