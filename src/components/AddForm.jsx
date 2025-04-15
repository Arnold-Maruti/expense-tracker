import React, { use } from 'react'
import { useState } from 'react'

function AddForm({data,setData}) {


const[expenseName,setExpenseName]=useState("")
const[description,setDescription]=useState("")
const[category,setCategory]=useState("")
const[amount,setAmount]=useState("")
const[date,setDate]=useState("")

let [formData,setFormData]=useState({});




function handleSubmit(e){
  
  formData={
    id: data.length + 1, 
    expenseName:expenseName,
    description:description,
    category:category,
    amount:amount,
    date:date
  }
  
  e.preventDefault();
  console.log("Data before submision of the form is: ", data);
  setFormData(formData)

   setData(data=>[...data,formData])

   
   console.log("Data after submision of the form is: ", data);

   setAmount('')
   setCategory('')
   setDate('')
   setDescription('')
   setExpenseName('')
}




  return (
    <div className='AddForm'> 
       <h1>Add Expense</h1>
       <p>Enter your expense details below </p>
       <form className='form'  onSubmit={(e)=>handleSubmit(e)}>
        <input type='text' placeholder='Enter expense name' value={expenseName} onChange={(e)=>setExpenseName(e.target.value)}/><br />
        <input type='text' placeholder='Enter expense description'  value={description} onChange={(e)=>setDescription(e.target.value)}/><br></br>
        <input type='text' placeholder='Enter expense category'value={category} onChange={(e)=>{setCategory(e.target.value)}}/><br />
        <input type='number' placeholder='Enter amount' value={amount} onChange={(e)=>{setAmount(e.target.value)}}/><br />
        <input type='date' value={date} onChange={(e)=>setDate(e.target.value)}/><br />
        <input type='submit' className='Submit'></input>
       </form>
    </div>
  )
}

export default AddForm