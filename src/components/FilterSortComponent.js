import React from "react";


 const FilterSortComponent = ({movies,rating,sort}) => {
    return (
    <>
    <label>Filter<select className="dropdown" onChange={rating}>
        <option></option>
            <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
    <option value="5">5</option></select>  </label> 
  
<label>Sort</label>
<select className="dropdown" onChange={sort}>
  <option></option>
  <option value="ASC">Ascending</option>
  <option value="DESC">Descending</option>
</select>
</>
    )
}

export default FilterSortComponent;