import axios from "axios"

const API_URL = 'https://food-delivery.kreosoft.ru/api/dish?'

const getDishes = async (category,isVeg, sorting, page) =>{
    let url = API_URL
    if(page !== null){
        url+= `page=${page}`
    }
    if(isVeg !== null){
        url+= `&vegetarian=${isVeg}`
    }
    if(category !== '' && category !== null){
        url+= `&categories=${category}`
    }
    if(sorting !=='' && sorting !== null){
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