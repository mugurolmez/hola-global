import axios from "axios"

export default class ApiService {
  

    static BASE_URL = `${process.env.REACT_APP_API_URL}`

    static getHeader() {
        const token = localStorage.getItem("token");
        return {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        };
    }

    /**AUTH */

    /* This  register a new user */
    static async registerUser(registration) {
        try {
            const response = await axios.post(`${this.BASE_URL}/auth/register`, registration);
            return response.data;
        } catch (error) {
            console.error('API çağrı hatası:', error);
            throw error;
        }
    }

    /* This  login a registered user */
    static async loginUser(loginDetails) {
        try {
            const response = await axios.post(`${this.BASE_URL}/auth/login`, loginDetails);
            return response.data;
        } catch (error) {
            console.error('API çağrı hatası:', error.response ? error.response.data : error.message);
            throw error;
        }
    }
    

    /***USERS */
    /*  This is  to get the user profile */
    static async getAllUsers() {
        const response = await axios.get(`${this.BASE_URL}/users/all`, {
            headers: this.getHeader()
        })
        return response.data
    }


    static async deleteUser(userId) {
        const response = await axios.delete(`${this.BASE_URL}/users/delete-by-id/${userId}`, {
            headers: this.getHeader()
        });
        return response.data;
    };




    static async getUserProfile() {
        const response = await axios.get(`${this.BASE_URL}/users/get-logged-in-profile-info`, {
            headers: this.getHeader()
        })
        return response.data
    }


    /* This is the  to get a single user */
    static async getUser(userId) {
        const response = await axios.get(`${this.BASE_URL}/users/get-by-id/${userId}`, {
            headers: this.getHeader()
        })
        return response.data
    }


    /*Customers */
    static async getAllCustomers() {

        
        const response = await axios.get(`${this.BASE_URL}/customers/all`, {
            headers: this.getHeader()
        })
        return response.data
    }
    /* Customers state */
    static async getAllCustomerByState(state) {
        const response = await axios.get(`${this.BASE_URL}/customers/getAllCustomerByState/${state}`, {
            headers: this.getHeader(),  // Authentication veya diğer gerekli başlıkları ekle
        });
        return response.data;
    }

    static async updateUser(user) {
            const response = await axios.put(`${this.BASE_URL}/users/update`, user, {
                headers: this.getHeader()
        })
        return response.data;
    }


    static async addCustomer(customerData) {
        try {
            const response = await axios.post(`${this.BASE_URL}/customers/add`, customerData);
            return response.data;  // response.data, API'den gelen yanıt verisini içerir.
        } catch (error) {
            console.error('API çağrı hatası:', error);
            throw error;  // Hata durumunda hatayı yakala
        }
    }



    static async updateCustomer(customer) {
        try {

            const result = await axios.put(`${this.BASE_URL}/customers/update`, customer, {
                headers: {
                    ...this.getHeader(),
                    'Content-Type': 'application/json'
                }
            });
            return result.data;
        } catch (error) {
            throw error;
        }
    }

    static async deleteCustomer(id) {
        const result = await axios.delete(`${this.BASE_URL}/customers/delete/${id}`, {
            headers: this.getHeader()
        })
        return result.data
    }



    /**ROOM */
    /* This  adds a new room room to the database */
    static async addRoom(formData) {
        const result = await axios.post(`${this.BASE_URL}/rooms/add`, formData, {
            headers: {
                ...this.getHeader(),
                'Content-Type': 'multipart/form-data'
            }
        });
        return result.data;
    }




    /* This  deletes a room by the Id */
    static async deleteRoom(roomId) {
        const result = await axios.delete(`${this.BASE_URL}/rooms/delete/${roomId}`, {
            headers: this.getHeader()
        })
        return result.data
    }







    /**AUTHENTICATION CHECKER */
    static logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('role')
    }

    static isAuthenticated() {
        const token = localStorage.getItem('token')
        return !!token
    }

    static isAdmin() {
        const role = localStorage.getItem('role')
        return role === 'ADMIN'
    }
    static isManager() {
        const role = localStorage.getItem('role')
        return role === 'MANAGER'
    }

    static isUser() {
        const role = localStorage.getItem('role')
        return role === 'USER'
    }
}
// export default new ApiService();