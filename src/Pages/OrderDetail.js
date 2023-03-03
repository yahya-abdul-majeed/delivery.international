import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSpecificOrder } from "../features/order/orderSlice"
import { useDispatch } from "react-redux"
import '../css/orderdetail.css'


export default function OrderDetail(){
    const [order, setOrder] = useState()
    const {id} = useParams()
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getSpecificOrder({token:localStorage.getItem('user'), orderId: id}))
        .then(response=>{
            setOrder(response.payload)
            console.log(response.payload)
        })
    },[])

    return(
       <div className="container w-50 my-5">
        {
            order && (
                <div className="card">
                    <div className="card-header">
                        <h3><b>Order#</b></h3>
                    </div>
                    <div className="card-body">
                        <p><b>Created at</b> : {order.orderTime}</p>
                        <p><b>Delivery time</b> : {order.deliveryTime}</p>
                        <p><b>Delivery address</b> : {order.address}</p>
                        <p><b>Order status</b> : {order.status}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        {
                            order.dishes.map(dish=>(
                                <li className="list-group-item">
                                    <div className="orderdetailitem">
                                        <img src={dish.image} style={{width:'300px'}}/>
                                        <div>
                                            <h3><b>{dish.name}</b></h3>
                                            <h5>Price/dish: {dish.price}</h5>
                                            <h5>Quantity: {dish.amount}</h5>
                                            <h5><b>Price</b>: {dish.amount * dish.price}</h5>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                        <h4 className="mx-3 my-2"><b>Total price:</b> {order.price}</h4>
                    </ul>
                </div>
            )
        }
       </div>
    )
}