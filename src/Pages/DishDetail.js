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

    return <div>
        {dish && (
            <div className="container">
                <img src={dish.image} style={{height: '500px'}}/>
                <h5>Dish Category: {dish.category}</h5>
                <h5>{dish.vegetarian? "Vegetarian":"Not Vegetarian"}</h5>
                <p>{dish.description}</p>
                <p>{dish.rating}</p>
                <h3>{dish.price} rubles</h3>
            </div>
        )}
    </div>
}