import React from 'react'
import SearchBar from './SearchBar'
import Table from './Table'


function Display(props) {
    
  console.log(props.data);
  
  return (
    <div>
        <SearchBar data={props.data} setData={props.setData}/>
        <Table  data={props.data} setData={props.setData} />
    </div>
  )
}

export default Display