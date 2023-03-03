import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DishDetail(){
    const [dish, setDish] = useState(null)
    const {id} = useParams()

    useEffect(()=>{
        // fetch(`https://food-delivery.kreosoft.ru/api/dish/${id}`)
        // .then(response=> response.text()) //turn bytestream to text
        // .then(data => console.log(data))
        axios.get(`https://food-delivery.kreosoft.ru/api/dish/${id}`)
        .then(response=> setDish(response.data))
    },[])

    return <div className="container w-50 my-5">
        {dish && (
            <div className="container">
                <img src={dish.image} style={{height: '500px',borderRadius:"2%"}}/>
                <div className="m-5">
                    <h2><b>Dish Category</b> : {dish.category}</h2>
                    <h5><b>{dish.vegetarian? "Vegetarian":"Not Vegetarian"}</b></h5>
                    <p>{dish.description}</p>
                    <p>{dish.rating}</p>
                    <h5>{dish.price} rubles</h5>
                </div>
            </div>
        )}
    </div>
}