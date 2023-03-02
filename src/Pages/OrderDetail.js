import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSpecificOrder } from "../features/order/orderSlice"
import { useDispatch } from "react-redux"


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
       <div>
        {
            order && (
                <div className="card">
                    <div className="card-header">
                        Order#
                    </div>
                    <div className="card-body">
                        <h4>Created at: {order.orderTime}</h4>
                        <h4>Delivery time: {order.deliveryTime}</h4>
                        <h4>Delivery address: {order.address}</h4>
                        <h4>Order status: {order.status}</h4>
                    </div>
                    <ul className="list-group list-group-flush">
                        {
                            order.dishes.map(dish=>(
                                <li className="list-group-item">
                                    <div style={{display:"flex"}}>
                                        <img src={dish.image} style={{width:'300px'}}/>
                                        <div>
                                            <h5>{dish.name}</h5>
                                            <h5>Price/dish: {dish.price}</h5>
                                            <h5>Quantity: {dish.amount}</h5>
                                            <h5><b>Price</b>: {dish.amount * dish.price}</h5>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                        <h2>Total price: {order.price}</h2>
                    </ul>
                </div>
            )
        }
       </div>
    )
}