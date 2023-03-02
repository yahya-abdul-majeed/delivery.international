import { useState } from 'react'
import '../css/filterbar.css'

export default function FilterBar({handleFilterChange, filterData}){
    
    return (
        <nav className="filterbar align-middle">
            <div className="row">
            <div className="col-4 pt-1" >
                <select name='category' value={filterData.category}  className="form-control" onChange={handleFilterChange}>
                    <option>--</option>
                    <option>Wok</option>
                    <option>Pizza</option>
                    <option>Soup</option>
                    <option>Dessert</option>
                    <option>Drink</option>
                </select>
            </div>
            <div className="col-4 pt-1" >
            <select name='isVeg' value={filterData.isVeg} className="form-control" onChange={handleFilterChange}>
                    <option value={true}>Veg</option>
                    <option value={false}>Non-veg</option>
                </select>
            </div>
            <div className="col-4 pt-1" >
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
        </div>
        </nav>
    )
}