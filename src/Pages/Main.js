import { useEffect, useState } from "react";
import Pagination from "../Components/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { getDishes } from "../features/dish/dishSlice";
import DishCard from "../Components/dishCard";



export default function Main(){

    const [dishes, setDishes] = useState([])
    const [pagination,setPagination] = useState()

    const dishState = useSelector(state=> state.dish)
    const dispatch = useDispatch()

    const fetchDishes = () =>{
        dispatch(getDishes())
        .then(response => {
            console.log("response.payload",response.payload)
            return response.payload
        })
        .then(data => {
            setDishes(data.dishes)
            setPagination(data.pagination)
        })
    }

    useEffect(()=>{
        fetchDishes()
    },[])

    return(<div>
       {dishes.length > 0 && (
        <div className="container">
            <div className="row">
            {
                dishes.map(dish=>(
                    <DishCard dish={dish}/>
                ))
            } 
            </div>   
        </div>
       )}
    </div>)
   
}