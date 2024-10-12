export const GET_ALL_USER_SUCCESS = "GET_ALL_USER_SUCCESS"
export const GET_ALL_USER_ERROR = "GET_ALL_USER_ERROR"
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS"
export const ADD_USER_ERROR = "ADD_USER_ERROR"
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS"
export const DELETE_USER_ERROR = "DELETE_USER_ERROR"
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS"
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR"

export const getAllUserSuccess = (users) => ({
    type: GET_ALL_USER_SUCCESS,
    payload: users
});
export const getAllUserError = (error) => ({
    type: GET_ALL_USER_ERROR,
    payload: error
})


export const deleteUserSuccess = (id) => ({
    type: DELETE_USER_SUCCESS,
    payload: id
})
export const deleteUserError = (error) => ({
    type: DELETE_USER_ERROR,
    payload: error
})

export const updateUserSuccess = (user) => ({
    type: UPDATE_USER_SUCCESS,
    payload: user
})
export const updateUserError = (error) => ({
    type: UPDATE_USER_ERROR,
    payload: error
})