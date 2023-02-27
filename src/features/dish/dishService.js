import axios from "axios"

const API_URL = 'https://food-delivery.kreosoft.ru/api/dish?vegetarian=false&page=1'

const getDishes = async () =>{
    const response = await axios.get(API_URL)
    return  response.data;
}

const dishService = {
    getDishes
}

export default dishService;