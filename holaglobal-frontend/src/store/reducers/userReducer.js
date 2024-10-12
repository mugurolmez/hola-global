import { DELETE_USER_ERROR, DELETE_USER_SUCCESS, GET_ALL_USER_ERROR, GET_ALL_USER_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_SUCCESS } from "../actions/userActions";

const initialState = {
    token: localStorage.getItem('token') || null,
    role: localStorage.getItem('role') || null,
    userItems: [],
    error: null,
    userItem: {}
};


export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_USER_SUCCESS:
            return {
                ...state,
                userItems: action.payload,
                error: null
            }
        case GET_ALL_USER_ERROR:
            return {
                ...state,
                error: action.payload
            }



        case DELETE_USER_SUCCESS:
            return {
                ...state,
                userItems: state.userItems.filter((item) => item.id !== action.payload),
                error: null
            };
        case DELETE_USER_ERROR:
            return {
                ...state,
                error: action.payload
            };
            case UPDATE_USER_SUCCESS:
                return {
                    ...state,
                    userItems: state.userItems.map(item =>
                        item.id === action.payload.id ? action.payload : item
                    ),
                    error: null
                };
            case UPDATE_USER_ERROR:
                return {
                    ...state,
                    error: action.payload
                }


        default:
            return state;
    }
}