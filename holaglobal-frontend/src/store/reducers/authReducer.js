import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT, REGISTER_ERROR, LOGIN_ERROR } from '../actions/authActions';

const initialState = {
    token: localStorage.getItem('token') || null,
    role: localStorage.getItem('role') || null, // Rol bilgisi ekleyin
    userItems:[],
    error: null,
    userItem:null
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
     
        case REGISTER_SUCCESS:
            return {
                ...state,
                userItem:action.payload,
                error: null
            };
            

    case REGISTER_ERROR:
        return {
            ...state,
            error: action.payload.message
        }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload);
            localStorage.setItem('role', action.payload.role);
            return {
                ...state,
                token: action.payload.token,
                error: null,
            };
        case LOGIN_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case LOGOUT:
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            return {
                ...state,
                token: null,
            };
        default:
            return state;
    }
}
