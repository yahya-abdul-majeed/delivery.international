import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getOrders,createOrder } from "../features/order/orderSlice"


export default function Order(){
    const[orders,setOrders] = useState([])
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOrders(localStorage.getItem('user')))
        .then(response=> {
            setOrders(response.payload)
            //console.log(response.payload)
        })
    },[])

    //event handlers
    const handleCreate = () =>{
        
        var date = new Date();
        date.setHours(date.getHours()+2)
        var day = date.getDate().toString();       // yields date
        var month = date.getMonth() + 1;    // yields month (add one as '.getMonth()' is zero indexed)
        month = month.toString()
        var year = date.getFullYear().toString();  // yields year
        var hour = date.getHours().toString();     // yields hours 
        var minute = date.getMinutes().toString(); // yields minutes
        var second = date.getSeconds().toString(); // yields seconds
        var millisecond = date.getMilliseconds().toString();

        if(month.length === 1){
            month = '0'+month
        }
        if(day.length === 1){
            day = '0'+ day
        }

        var time = year+'-'+month+'-'+day+'T'+hour+':'+
        minute+':'+second+'.'+millisecond+'Z'

        const obj = {
            token : localStorage.getItem('user'),
            data : {
                deliveryTime: time,
                address: "lenina 36"
            }
        }
        console.log('data',obj.data)
        dispatch(createOrder(obj))
        .then(response=>{
            dispatch(getOrders(localStorage.getItem('user')))
            .then(response=> {
                setOrders(response.payload)
                console.log("from create",response.payload)
            })
        })
    }

    const handleConfirm = () =>{
        
    }

    return (
        <div>
            <div  style={{border:'3px solid black', display:"flex"}}>
                <h5>An order can be created with the items in the cart</h5>
                <button onClick={handleCreate} className="btn btn-success">Create Order</button>
            </div>
            <h2>Previous Orders</h2>
            {
                orders?.map(order=>(
                    <div style={{border:'3px solid black'}}>
                        <h4>Order from :{order.orderTime}</h4>
                        <h4>Order status: {order.status}</h4>
                        <h4>Delivery time: {order.deliveryTime}</h4>
                        <h4>Total Order Cost: {order.price}</h4>
                        <button onClick={handleConfirm} className="btn btn-success">Confirm</button>
                    </div>
                ))
            }
        </div>
    )
}