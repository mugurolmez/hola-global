import ApiService from "../../Services/ApiService"
import { showSnackbar } from "../actions/snackbarActions";
//import { showSnackbar } from "../actions/snackbarActions";
import { deleteUserError, deleteUserSuccess, getAllUserError, getAllUserSuccess, updateUserError, updateUserSuccess } from "../actions/userActions";

export const getAllUser = () => async (dispatch) => {
    try {
        const response = await ApiService.getAllUsers();
        dispatch(getAllUserSuccess(response.data));  // response.data bir dizi olmalı
    } catch (error) {
        dispatch(getAllUserError(error));
    }
}
export const deleteUser = (id) => async (dispatch) => {
    try {
        let response = await ApiService.deleteUser(id);
        
        if (response.success) {
            dispatch(deleteUserSuccess(id)); // id'yi payload olarak gönderiyoruz
            dispatch(showSnackbar(response.message, 'success'));
            return { response };  // Başarılı yanıt dönülüyor
        } else {
            dispatch(deleteUserError(response.message || 'Müşteri Silme Hatası'));
            dispatch(showSnackbar(response.message || 'Müşteri Silme Hatası' , 'error'));
            return { response };  // Hatalı yanıt dönülüyor
        }
    } catch (error) {
        dispatch(deleteUserError(error.message || 'Müşteri Silme Hatası'));
        dispatch(showSnackbar(error.message || 'Müşteri Silme Hatası' , 'error'));
        return { success: false, message: error.message || 'Müşteri Silme Hatası' };  // Hata durumunda başarısız yanıt
    }
};

export const updateUser = (userData) => async (dispatch) => {
    try {
        const response = await ApiService.updateUser(userData);
        
        if (response.success) {
            dispatch(updateUserSuccess(response));
            dispatch(showSnackbar(response.message, 'success'));
            return { response }; 
        } else {
            dispatch(updateUserError(response.message || 'Kullanıcı Güncelleme Hatası'));
            dispatch(showSnackbar(response.message , 'error'));
            return { response }; 
        }
    } catch (error) {
        dispatch(updateUserError(error.message || 'Kullanıcı Güncelleme Hatası'));
        dispatch(showSnackbar(error.message || 'Kullanıcı Güncelleme Hatası','error'));
        return { response: { message: error.message } }; 
    }
};