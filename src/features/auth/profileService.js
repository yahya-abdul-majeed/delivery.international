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
    
    return response.data
}

const updateProfile = async(userData, token)=>{
    console.log(userData,"from update profile")
    token = token.replaceAll('"', '')
    token = 'Bearer '+token
    const config = {
        headers:{
            Authorization: token
        }
    }
    await axios.put(API_URL+'profile',userData,config)
}

const profileService = {
    getProfile,
    updateProfile
}

export default profileService;