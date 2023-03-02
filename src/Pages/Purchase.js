import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../features/order/orderSlice";
import { getDishes } from "../features/cart/cartSlice";
import moment from "moment/moment";


export default function Purchase(){
    const [cart, setCart] = useState([])
    const [formData, setFormData]= useState({
        deliveryTime: '',
        address: ''
    })
    const dispatch = useDispatch()
    const profileState = useSelector(state=>state.profile)


    useEffect(()=>{
        dispatch(getDishes(localStorage.getItem('user')))
        .then(response => setCart(response.payload))

    },[])

    //event handlers
    const handleCreate = () =>{
        let date = formData.deliveryTime
        const obj = {
            token : localStorage.getItem('user'),
            data : {
                deliveryTime:  date+=":00.000Z",
                address: formData.address
            }
        }
        console.log(obj)
        dispatch(createOrder(obj))
    }

    const handleChange = (e) =>{
        setFormData(prevState=>({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    return(
        <div>
            <h1>Create Order</h1>
            <h3>User data</h3>
            <form>
                <div className="row">
                <div className="form-group col">
                    <label for="phonenumber">Phone Number</label>
                    <input disabled value={profileState?.user?.phoneNumber} className="form-control" type="tel" id="phonenumber"></input>
                </div>
                <div className="form-group col">
                    <label  for="email">email</label>
                    <input disabled value={profileState?.user?.email} className="form-control" type="email" id="email"></input>
                </div>
                </div>
            </form>
            <h3>Delivery data</h3>
            <form>
                <div className="row">
                <div className="form-group col">
                    <label for="address">Delivery address</label>
                    <input value={formData.address} onChange={handleChange} className="form-control" name="address" type="text" id="address"></input>
                </div>
                <div className="form-group col">
                    <label  for="time">Delivery time</label>
                    <input value={formData.deliveryTime} onChange={handleChange} className="form-control" name="deliveryTime" type="datetime-local" id="time"></input>
                </div>
                </div>
            </form>

            <h3>items list</h3>
            <ul className="list-group list-group-flush">
                {
                    cart?.map(dish=>(
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
            </ul>
            <h2>Total price: {cart.reduce((acc,cur)=>(acc+cur.price*cur.amount),0)}</h2>
            <button onClick={handleCreate} className="btn btn-success">Confirm Order</button>
        </div>
    )
}