import axios from "axios";

const API_URL = 'https://food-delivery.kreosoft.ru/api/order'

const getOrders = async(token)=>{
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

const getSpecificOrder = async(token,orderId)=>{
    token = token.replaceAll('"', '')
    token = 'Bearer '+token
    const config = {
        headers:{
            Authorization: token
        }
    }

    const response = await axios.get(API_URL+`/${orderId}`,config)
}

const createOrder = async(token,data)=>{
    token = token.replaceAll('"', '')
    token = 'Bearer '+token
    const config = {
        headers:{
            Authorization: token
        }
    }

    await axios.post(API_URL,data,config)
}

const confirmOrder = async(token,orderId)=>{
    token = token.replaceAll('"', '')
    token = 'Bearer '+token
    const config = {
        headers:{
            Authorization: token
        }
    }

    await axios.post(API_URL+`/${orderId}/status`,null,config)
}

const orderService= {
    getOrders,
    getSpecificOrder,
    createOrder,
    confirmOrder
}

export default orderService