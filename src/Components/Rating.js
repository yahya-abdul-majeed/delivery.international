import { useEffect, useState } from "react"
import Rating from "react-rating"
import ratingService from "../features/rating/ratingService"

export default function RatingComp({initialRating, dishId}){
    const [isReadonly,setIsReadonly] = useState(true)
    
    useEffect(()=>{
        console.log('rating useeffect')
        ratingService.checkForRating(localStorage.getItem('user'),dishId)
        .then(response=> setIsReadonly(!response))
    },[dishId])

    const handleRatingChange = (value) =>{
        ratingService.setRating(localStorage.getItem('user'),dishId,value)
        .then(()=>console.log("rating set"))
    }

    return(
        <Rating
        start={0}
        stop={10}
        step={1}
        fractions={1}
        initialRating={initialRating}
        direction={'ltr'}
        readonly={isReadonly}
        onChange={handleRatingChange}
        />
    )
}