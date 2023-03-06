import { useNavigate } from "react-router-dom"
import RatingComp from "./Rating"
import '../css/dishcard.css'
import { addDish,getDishes, deleteDish } from "../features/cart/cartSlice"
import { useDispatch ,useSelector} from "react-redux"
import { useEffect, useState } from "react"


export default function DishCard({dish}){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [itemsInCart, setItemsInCart] = useState([])
    const [count, setCount] = useState(0)
    let currentItem = itemsInCart?.filter(item=>item.id === dish.id)[0]

    useEffect(()=>{
        dispatch(getDishes(localStorage.getItem('user')))
        .then(response=>setItemsInCart(response.payload))
        console.log(dish.id,"dishcard useeffect")
    },[count])
   
    //event handlers
    const handleClick = () =>{
        navigate(`/item/${dish.id}`)
    }

    const handleAdd = () =>{
        const obj = {
            token: localStorage.getItem('user'),
            dishId: dish.id
        }
        dispatch(addDish(obj))
        .then(()=> setCount(count + 1))
    }

    
    const handleIncrement = (dishId) =>{
        console.log(dishId, "handle increment called")
        dispatch(addDish({token:localStorage.getItem('user'),dishId}))
        .then(()=>setCount(count+1))
    }

    const handleDecrement = (dishId) =>{
        const amount = currentItem.amount
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
        .then(()=>setCount(count+1))
    }

    return (
        <div className="col-lg-4 col-md-6 col-sm-12 my-4">
            <div className="card" style={{height:"100%"}} >
                <img src={dish.image} onClick={handleClick}/>
                <div className="card-body">
                    <h2 className="card-title"><b>{dish.name}</b></h2>
                    <p>Dish Category: {dish.category}</p>
                    <RatingComp initialRating={dish.rating} dishId={dish.id}/>
                    <p className="card-text">{dish.description}</p>
                    <div className="pricediv">
                        <h5>Price: {dish.price}</h5>
                        {
                            itemsInCart?.filter(item=>item.id === dish.id).length > 0 ? (
                                <div className="otherbtns">
                                    <div className="cartbuttons">
                                        <button className="btn btn-primary" onClick={()=> handleIncrement(dish.id)} >+</button>
                                        <h4>{itemsInCart? currentItem.amount:0}</h4>
                                        <button className="btn btn-primary" onClick={()=> handleDecrement(dish.id)} >-</button> 
                                    </div>
                                </div>
                            ):(
                                <button onClick={handleAdd} className="btn btn-primary">Add</button>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}