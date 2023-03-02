import axios from "axios"

const API_URL = 'https://food-delivery.kreosoft.ru/api/dish?'

const getDishes = async (category,isVeg, sorting, page) =>{
    let url = API_URL
    url+= `page=${page}`
    url+= `&vegetarian=${isVeg}`
    if(category !== ''){
        url+= `&categories=${category}`
    }
    if(sorting !==''){
        url+= `&sorting=${sorting}`
    }
    console.log('url',url)
    const response = await axios.get(url)
    return  response.data;
}

const dishService = {
    getDishes
}

export default dishService;