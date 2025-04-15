import React, { useState } from 'react'

function DeleteButton({elementId,data,setData}) {  

function handleClick(){

    let newArray=data.filter((dat)=>dat.id!==elementId)

    setData(newArray)


}
  
  return (
    <div>
        <button onClick={()=>handleClick(elementId)}>delete</button>
    </div>
  )
}

export default DeleteButton