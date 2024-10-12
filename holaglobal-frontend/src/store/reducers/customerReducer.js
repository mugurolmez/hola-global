import { ADD_CUSTOMER_ERROR, ADD_CUSTOMER_SUCCESS, DELETE_CUSTOMER_ERROR, DELETE_CUSTOMER_SUCCESS, GET_ALL_CUSTOMERS_ERROR, GET_ALL_CUSTOMERS_SUCCESS, UPDATE_CUSTOMER_ERROR, UPDATE_CUSTOMER_SUCCESS } from "../actions/customerActions";




const initialState = {
    token: localStorage.getItem('token') || null,
    role: localStorage.getItem('role') || null,
    customerItems: [],
    error: null,
    customerItem: {}
};


export default function customerReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_CUSTOMERS_SUCCESS:
            return {
                ...state,
                customerItems: action.payload,
                error: null
            }
        case GET_ALL_CUSTOMERS_ERROR:
            return {
                ...state,
                error: action.payload
            }


        case ADD_CUSTOMER_SUCCESS:
            return {
                ...state,
                customerItems: [...state.customerItems, action.payload],
                error: null
            };


        case ADD_CUSTOMER_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case UPDATE_CUSTOMER_SUCCESS:
            return {
                ...state,
                customerItems: state.customerItems.map(item =>
                    item.id === action.payload.id ? action.payload : item
                ),
                error: null
            };
        case UPDATE_CUSTOMER_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case DELETE_CUSTOMER_SUCCESS:
            return {
                ...state,
                customerItems: state.customerItems.filter((item) => item.id !== action.payload),
                error: null
            };


        case DELETE_CUSTOMER_ERROR:
            return {
                ...state,
                error: action.payload
            };

        default:
            return state; //
    }
}