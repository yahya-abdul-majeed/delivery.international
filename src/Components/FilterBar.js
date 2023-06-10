import { useState } from 'react'
import '../css/filterbar.css'

export default function FilterBar({handleFilterChange, filterData}){
    
    const [fdata, setFdata] = useState({
        category:filterData.category,
        sorting: filterData.sorting,
        isVeg : filterData.isVeg
    })
    console.log("filterbar")


    const handleLocalFilterChange = (event) =>{
        if((event.target.name == 'category' && event.target.value == 'All') || (event.target.name == 'sorting' && event.target.value == 'None')){
            setFdata(prevState => ({
                ...prevState,
                [event.target.name]:null
            }))
        }
        else{
            setFdata(prevState => ({
                ...prevState,
                [event.target.name]:event.target.value
            }))
        }
    }

    return (
        <div className="filterbar">
            <div>
                <select name='category' value={fdata.category} onChange={handleLocalFilterChange}  className="form-select"  >
                    <option>All</option>
                    <option>Wok</option>
                    <option>Pizza</option>
                    <option>Soup</option>
                    <option>Dessert</option>
                    <option>Drink</option>
                </select>
            </div>

            <div>
                <select name='sorting' value={fdata.sorting} onChange={handleLocalFilterChange}  className="form-control" >
                    <option>None</option>
                    <option>NameAsc</option>
                    <option>NameDesc</option>
                    <option>PriceAsc</option>
                    <option>PriceDesc</option>
                    <option>RatingAsc</option>
                    <option>RatingDesc</option>
                </select>
            </div>

            <div>
                <select name='isVeg' value={fdata.isVeg} className="form-control" onChange={handleLocalFilterChange}>
                    <option value={true}>Veg</option>
                    <option value={false}>Non-veg</option>
                </select>
            </div>
            <div>
                <button onClick={()=>handleFilterChange(fdata)} className='btn btn-success'>Filter</button>
            </div>
        </div>
    )
}



