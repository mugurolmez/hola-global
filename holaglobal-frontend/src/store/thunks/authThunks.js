
import ApiService from "../../Services/ApiService";
import { loginError, loginSuccess, registerError, registerSuccess } from "../actions/authActions";
import { showSnackbar } from "../actions/snackbarActions";


export const register = (values) => {
    return async (dispatch) => {
        try {
      
            const response = await ApiService.registerUser(values);

            dispatch(registerSuccess(response.data));
            dispatch(showSnackbar(response.message, 'success'));
        } catch (error) {
            const response= dispatch(registerError(error));
            dispatch(showSnackbar(response.message, 'error'));
        }
    };
};



export const login = (credentials) => async (dispatch) => {
    try {
        const response = await ApiService.loginUser(credentials);
        dispatch(loginSuccess(response));
        return response;
    } catch (error) {
        const errorMessage = error.response?.data?.message || "Giriş sırasında bir hata oluştu.";
        dispatch(loginError(error));
        dispatch(showSnackbar(errorMessage, 'error'));
        throw error;
    }
};

