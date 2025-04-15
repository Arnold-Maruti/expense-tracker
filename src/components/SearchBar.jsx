import React, { useState } from 'react';

function SearchBar({data,setData}) {

  const [search,setSearch]=useState("")
function handleChange(expense){
   setSearch(expense)
  console.log(expense)
  
  let newData=data.filter((dats)=>dats.expenseName==search);

  setData(newData)


  setSearch("")
}
  
  return (
    <div>
        <input placeholder='search expense' onChange={(e)=>handleChange(e.target.value)}/>
    </div>
  )
}

export default SearchBar