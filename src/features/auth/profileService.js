import axios from "axios";

const API_URL = 'https://food-delivery.kreosoft.ru/api/account/'

const getProfile = async (token)=>{
    token = token.replaceAll('"', '')
    token = 'Bearer '+token
    const config = {
        headers:{
            Authorization: token
        }
    }
    const response = await axios.get(API_URL+'profile', config)
    //console.log("this is response data")
    //console.log(response.data)
    return response.data;
}

const updateProfile = async(userData, token)=>{
    const config = {
        headers:{
            'Authorization': 'Bearer '+ token
        }
    }
    await axios.put(API_URL+'profile',userData,config)
}

const profileService = {
    getProfile,
    updateProfile
}

export default profileService;