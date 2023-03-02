import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addDish, deleteDish, getDishes } from "../features/cart/cartSlice"


export default function Cart(){
    const [items, setItems] = useState([])
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getDishes(localStorage.getItem('user')))
        .then(response => setItems(response.payload))
    },[])

    //event handlers
    const handleIncrement = (dishId) =>{
        dispatch(addDish({token:localStorage.getItem('user'),dishId}))
        .then(response=>{
            dispatch(getDishes(localStorage.getItem('user')))
            .then(res => setItems(res.payload))
        })
    }

    const handleDecrement = (dishId) =>{
        const amount = items.filter(item=> item.id === dishId).amount
        let isLastItem
        if(amount <= 1){
            isLastItem = true
        }else{
            isLastItem = false
        }
        const obj = {
            token:localStorage.getItem('user'),
            dishId,
            isLastItem 
        }
        dispatch(deleteDish(obj))
        .then(response=>{
            dispatch(getDishes(localStorage.getItem('user')))
            .then(res => setItems(res.payload))
        })
    }

    const handleRemove = (dishId) =>{
        const obj = {
            token:localStorage.getItem('user'),
            dishId,
            isLastItem : true
        }
        dispatch(deleteDish(obj))
        .then(response=>{
            dispatch(getDishes(localStorage.getItem('user')))
            .then(res => setItems(res.payload))
        })
    }

    return (
        <div>
            <h2>Your Cart</h2>
            {
                items?.map(item=>(
                    <div style={{display:"flex"}}>
                        <img src={item.image} style={{width:'300px'}}/>
                        <div>
                            <h5>{item.name}</h5>
                            <h5>Price/dish: {item.price}</h5>
                        </div>
                        <div>
                            <button className="btn btn-primary" onClick={()=> handleIncrement(item.id)}>+</button>
                            <h4>{item.amount}</h4>
                            <button className="btn btn-primary" onClick={()=> handleDecrement(item.id)}>-</button>
                        </div>
                        <div>
                            <button className="btn btn-danger" onClick={()=>handleRemove(item.id)}>Remove</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}