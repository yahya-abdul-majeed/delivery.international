import axios from 'axios'

const API_URL = 'https://food-delivery.kreosoft.ru/api/dish/'

const checkForRating = async (token, dishId)=>{
    token = token.replaceAll('"', '')
    token = 'Bearer '+token
    const config = {
        headers:{
            Authorization: token
        }
    }

    const response = await axios.get(API_URL+`${dishId}/rating/check`,config)
    return response.data
}

const setRating = async (token, dishId, ratingScore)=>{
    token = token.replaceAll('"', '')
    token = 'Bearer '+token
    const config = {
        headers:{
            Authorization: token
        }
    }
    console.log(ratingScore)
    await axios.post(API_URL+`${dishId}/rating?ratingScore=${ratingScore}`,null,config)
}

const ratingService = {
    checkForRating,
    setRating
}

export default ratingService;