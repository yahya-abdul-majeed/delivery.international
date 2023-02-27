import { useNavigate } from "react-router-dom"


export default function DishCard({dish}){
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate(`/item/${dish.id}`)
    }

    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card" style={{width:"18rem"}} onClick={handleClick}>
                <img src={dish.image}/>
                <div className="card-body">
                    <h5 className="card-title">{dish.name}</h5>
                    <h5>Dish Category: {dish.category}</h5>
                    <h5>{dish.rating}</h5>
                    <p className="card-text">{dish.description}</p>
                    <div className="card-footer row">
                        <div className="col-6">
                            <h5>Price: {dish.price}</h5>
                        </div>
                        <div className="col-6 text-end">
                            <button className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}