import { useEffect, useState } from "react";
import Pagination from "../Components/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { getDishes } from "../features/dish/dishSlice";
import DishCard from "../Components/dishCard";
import FilterBar from "../Components/FilterBar";
import { useSearchParams } from 'react-router-dom'


export default function Main(){

    const [dishes, setDishes] = useState([])
    const [pagination,setPagination] = useState()
    const [filterData, setFilterData] = useState({
        category: '',
        isVeg: false,
        sorting:'',
        page: 1
    })

    const [searchParams, setSearchParams] = useSearchParams()

    const handlePageChange = ( {selected}) =>{
        setFilterData(prevState=>({
            ...prevState,
            page: selected + 1
        }))
    }

    const handleFilterChange = (event)=>{
        setFilterData(prevState => ({
            ...prevState,
            [event.target.name]:event.target.value,
            page: 1
        }))
    }
    useEffect(()=>{
        setSearchParams(filterData)
        fetchDishes(filterData)
        console.log('main useeffect')
    },[filterData])

    useEffect(()=>{
        console.log("second useeffect")
        setFilterData({
            category: searchParams.get("category"),
            isVeg: searchParams.get("isVeg"),
            sorting:searchParams.get("sorting"),
            page: searchParams.get("page")
        })
    },[])

    

    const dishState = useSelector(state=> state.dish)
    const dispatch = useDispatch()

    const fetchDishes = (filters) =>{
        dispatch(getDishes(filters))
        .then(response => {
            console.log("response.payload",response.payload)
            return response.payload
        })
        .then(data => {
            setDishes(data.dishes)
            setPagination(data.pagination)
        })
    }

    // useEffect(()=>{
    //     fetchDishes(filterData)
    // },[])

    //for dishcard
    

    return(
        <div>
            <FilterBar handleFilterChange={handleFilterChange} filterData={filterData}/>
            {dishes.length > 0 && (
                <div className="container mt-5">
                    <div className="row">
                    {
                        dishes.map(dish=>(
                            <DishCard key={dish.id} dish={dish} />
                        ))
                    } 
                    </div>   
                </div>
            )}
            {pagination && <Pagination count={pagination.count} handlePageChange={handlePageChange}/>}
        </div>
    )
   
}