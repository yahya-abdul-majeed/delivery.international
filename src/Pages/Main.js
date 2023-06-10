import { useEffect, useState } from "react";
import Pagination from "../Components/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { getDishes } from "../features/dish/dishSlice";
import DishCard from "../Components/dishCard";
import FilterBar from "../Components/FilterBar";
import { useSearchParams } from 'react-router-dom'


export default function Main(){

    const [searchParams, setSearchParams] = useSearchParams()
    const [dishes, setDishes] = useState([]) 
    const [pagination,setPagination] = useState()
    const [filterData, setFilterData] = useState({
        category: ((searchParams.get('category') == 'null' || searchParams.get('category') == null)? '': searchParams.get('category')), 
        isVeg: ((searchParams.get('isVeg') == 'null' || searchParams.get('isVeg') == null)? false: searchParams.get('isVeg')),
        sorting:((searchParams.get('sorting') == 'null' || searchParams.get('sorting') == null) ? '': searchParams.get('sorting')),
        page: ((searchParams.get('page') == 'null' || searchParams.get('page') == null) ? 1 : searchParams.get('page'))
    })

    console.log("before useffect",filterData)


    const handlePageChange = ( {selected}) =>{
        setFilterData(prevState=>({
            ...prevState,
            page: selected + 1
        }))
    }

    const handleFilterChange = (fdata)=>{
        setFilterData({
            ...fdata,
            page: 1,
        })
    }
    useEffect(()=>{
        var obj ={}
        if(filterData.page == 1 && (filterData.sorting !== '' || filterData.category !== '')){
            obj.page = filterData.page
        }
        if(filterData.page > 1){
            obj.page = filterData.page  
        }
        if(filterData.sorting !== '' && filterData.sorting !== null){
            obj.sorting = filterData.sorting
        }
        if(filterData.category !== '' && filterData.category !== null){
            obj.category = filterData.category
        }
        if(filterData.isVeg == true || filterData.isVeg == 'true'){
            obj.isVeg = true
        }
        if((filterData.isVeg == false || filterData.isVeg == 'false') && (filterData.sorting !== '' || filterData.category !== '' || filterData.page > 1)){
            obj.isVeg = false;
        }
        setSearchParams(obj)
        fetchDishes(filterData)
    },[filterData])

    // useEffect(()=>{
    //     setFilterData({
    //         category: (searchParams.get('category') == 'null'? '': searchParams.get('category')), 
    //         isVeg: (searchParams.get('isVeg') == 'null'? false: searchParams.get('isVeg')),
    //         sorting:(searchParams.get('sorting') == 'null' ? '': searchParams.get('sorting')),
    //         page: (searchParams.get('page') == 'null' ? 1 : searchParams.get('page'))
    //    })
    // },[])

    

    const dishState = useSelector(state=> state.dish)
    const dispatch = useDispatch()

    const fetchDishes = (filters) =>{
        console.log(filters, "filters")
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

    

    return(
        <div>
            <FilterBar handleFilterChange={handleFilterChange} filterData={filterData} />
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
            {pagination && <Pagination key={filterData.page} selectedPage={parseInt(filterData.page,10)} count={pagination.count} handlePageChange={handlePageChange}/>}
        </div>
    )
   
}