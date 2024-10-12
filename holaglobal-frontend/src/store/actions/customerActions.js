export const GET_ALL_CUSTOMERS_SUCCESS = "GET_ALL_CUSTOMERS_SUCCESS"
export const GET_ALL_CUSTOMERS_ERROR = "GET_ALL_CUSTOMERS_ERROR"

export const ADD_CUSTOMER_SUCCESS = "ADD_CUSTOMER_SUCCESS"
export const ADD_CUSTOMER_ERROR = "ADD_CUSTOMER_ERROR"
export const DELETE_CUSTOMER_SUCCESS = "DELETE_CUSTOMER_SUCCESS";
export const DELETE_CUSTOMER_ERROR = "DELETE_CUSTOMER_ERROR";
export const UPDATE_CUSTOMER_SUCCESS ="UPDATE_CUSTOMER_SUCCESS"
export const UPDATE_CUSTOMER_ERROR ="UPDATE_CUSTOMER_ERROR"

export const getAllCustomersSuccess = (customers) => ({
    type: GET_ALL_CUSTOMERS_SUCCESS,
    payload: customers,  
});
export const getAllCustomersError = (error) => ({
    type: GET_ALL_CUSTOMERS_ERROR,
    payload: error
})



export const addCustomerSuccess = (customer) => ({
    type: ADD_CUSTOMER_SUCCESS,
    payload: customer
})  
export const addCustomerError = (error) => ({
    type: ADD_CUSTOMER_ERROR,
    payload: error
})


export const deleteCustomerSuccess = (id) => ({
    type: DELETE_CUSTOMER_SUCCESS,
    payload: id
})
export const deleteCustomerError = (error) => ({
    type: DELETE_CUSTOMER_ERROR,
    payload: error
})


export const updateCustomerSuccess = (customer) => ({
    type: UPDATE_CUSTOMER_SUCCESS,
    payload: customer
})
export const updateCustomerError = (error) => ({
    type: UPDATE_CUSTOMER_ERROR,
    payload: error
})