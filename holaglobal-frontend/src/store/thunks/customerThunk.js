import ApiService from "../../Services/ApiService"
import { addCustomerError, addCustomerSuccess, getAllCustomersError, getAllCustomersSuccess, deleteCustomerSuccess, deleteCustomerError, updateCustomerError, updateCustomerSuccess } from "../actions/customerActions"
import { showSnackbar } from "../actions/snackbarActions";

export const getAllCustomer = () => async (dispatch) => {
    try {
        const response = await ApiService.getAllCustomers();
        dispatch(getAllCustomersSuccess(response.data));  // response.data bir dizi olmalı
    } catch (error) {
        dispatch(getAllCustomersError(error));
    }
}


export const addCustomer = (customerData) => async (dispatch, getState) => {
    try {
        const response = await ApiService.addCustomer(customerData);
        const currentLocation = getState().location.location; // Mevcut lokasyonu al
        if (response.success) {
       
            dispatch(addCustomerSuccess(response));
            const successMessage = currentLocation === '/dashboard'
                ? response.message // Dashboard'da ise gelen mesaj
                : 'Kaydınız Başarıyla Alındı! Yetkililerimiz en kısa sürede sizinle iletişime geçecektir. İlginiz için teşekkür ederiz. Sorularınız veya ek talepleriniz varsa, bizimle iletişime geçmekten çekinmeyin.'; // Diğer lokasyonlarda bu mesaj
            dispatch(showSnackbar(successMessage, 'success'));
            return { response };
        } else {
            dispatch(addCustomerError(response.message || 'Müşteri Ekleme Hatası'));
            dispatch(showSnackbar(response.message || 'Müşteri Ekleme Hatası', 'error'));
            return { response };
        }
    } catch (error) {
        dispatch(addCustomerError(error.message || 'Müşteri Ekleme Hatası'));
        dispatch(showSnackbar(error.message || 'Müşteri Ekleme Hatası', 'error'));
        return { response: { message: error.message } };
    }
};
  
  
  export const updateCustomer = (customerData) => async (dispatch) => {
    try {
        const response = await ApiService.updateCustomer(customerData);
        
        if (response.success) {
            dispatch(updateCustomerSuccess(response));
            dispatch(showSnackbar(response.message, 'success'));
            return { response }; 
        } else {
            dispatch(updateCustomerError(response.message || 'Müşteri Güncelleme Hatası'));
            dispatch(showSnackbar(response.message , 'error'));
            return { response }; 
        }
    } catch (error) {
        dispatch(updateCustomerError(error.message || 'Müşteri Güncelleme Hatası'));
        dispatch(showSnackbar(error.message || 'Müşteri Güncelleme Hatası','error'));
        return { response: { message: error.message } }; 
    }
};

export const deleteCustomer = (id) => async (dispatch) => {
    try {
        let response = await ApiService.deleteCustomer(id);
        
        if (response.success) {
            dispatch(deleteCustomerSuccess(id)); // id'yi payload olarak gönderiyoruz
            dispatch(showSnackbar(response.message, 'success'));
            return { response };  // Başarılı yanıt dönülüyor
        } else {
            dispatch(deleteCustomerError(response.message || 'Müşteri Silme Hatası'));
            dispatch(showSnackbar(response.message || 'Müşteri Silme Hatası' , 'error'));
            return { response };  // Hatalı yanıt dönülüyor
        }
    } catch (error) {
        dispatch(deleteCustomerError(error.message || 'Müşteri Silme Hatası'));
        dispatch(showSnackbar(error.message || 'Müşteri Silme Hatası' , 'error'));
        return { success: false, message: error.message || 'Müşteri Silme Hatası' };  // Hata durumunda başarısız yanıt
    }
};




