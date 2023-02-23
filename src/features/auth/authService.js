//strictly for making http requests
import axios from "axios";

const API_URL = 'https://food-delivery.kreosoft.ru/api/account/'

const register = async (userData) =>{
    const response = await axios.post(API_URL+'register', userData)

    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }

    return response.data;
}

const authService = {
    register
}

export default authService;
