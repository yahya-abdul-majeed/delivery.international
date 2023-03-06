import { useState } from 'react'
import '../css/filterbar.css'

export default function FilterBar({handleFilterChange, filterData}){
    
    return (
        <div className="filterbar">
            <div>
                <select name='category' value={filterData.category}  className="form-select" multiple onChange={handleFilterChange}>
                    <option>--</option>
                    <option>Wok</option>
                    <option>Pizza</option>
                    <option>Soup</option>
                    <option>Dessert</option>
                    <option>Drink</option>
                </select>
            </div>

            <div>
                <select name='sorting' value={filterData.sorting}  className="form-control" onChange={handleFilterChange}>
                    <option>--</option>
                    <option>NameAsc</option>
                    <option>NameDesc</option>
                    <option>PriceAsc</option>
                    <option>PriceDesc</option>
                    <option>RatingAsc</option>
                    <option>RatingDesc</option>
                </select>
            </div>

            <div>
                <select name='isVeg' value={filterData.isVeg} className="form-control" onChange={handleFilterChange}>
                    <option value={true}>Veg</option>
                    <option value={false}>Non-veg</option>
                </select>
            </div>
        </div>
    )
}



// {







// }