import axios from "axios";


const API_URL = 'https://food-delivery.kreosoft.ru/api/basket'

const getDishes = async (token)=>{
    token = token.replaceAll('"', '')
    token = 'Bearer '+token
    const config = {
        headers:{
            Authorization: token
        }
    }

    const response = await axios.get(API_URL,config)
    return response.data
}

const addDish = async (token, dishId) =>{
    token = token.replaceAll('"', '')
    token = 'Bearer '+token
    const config = {
        headers:{
            Authorization: token
        }
    }

    await axios.post(API_URL+`/dish/${dishId}`,null,config)
}

const deleteDish = async (token,dishId,isLastItem)=>{
    token = token.replaceAll('"', '')
    token = 'Bearer '+token
    const config = {
        headers:{
            Authorization: token
        }
    }

    let url = API_URL+`/dish/${dishId}`
    if(isLastItem){
        url= url + '?increase=false'
    }else{
        url= url + '?increase=true'
    }

    const response = await axios.delete(url,config)
    console.log('from delete', response)
}


const cartService = {
    getDishes,
    addDish,
    deleteDish
}

export default cartService;