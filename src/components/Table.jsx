import React from 'react'
import DeleteButton from './DeleteButton'

function Table(props) {
   const DataDisplayed=props.data.map((dat, index)=>{
    return(
    <tr key={index}>
        <td>{dat.expenseName}</td>
        <td>{dat.description}</td>
        <td>{dat.category}</td>
        <td>{dat.amount}</td>
        <td>{dat.date}</td>
        <DeleteButton elementId={dat.id} data={props.data} setData={props.setData}/>
    </tr>
   )})

   
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>expense</th>
                    <th>description</th>
                    <th>category</th>
                    <th>amount</th>
                    <th>date</th>
                </tr>
            </thead>
            <tbody>
         {DataDisplayed}
         </tbody>
        </table>
    </div>
  )
}

export default Table