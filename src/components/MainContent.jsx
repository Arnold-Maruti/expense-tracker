import React from 'react'
import AddForm from './AddForm'
import Display from './Display'
import { data } from '../assets/data'
import { useState } from 'react'


function MainContent() {

const [datas,setData]=useState(data)

  return (
    <div className='MainContent'>
        <AddForm data={datas} setData={setData}/>
        <Display data={datas} setData={setData} />
    </div>
  )
}

export default MainContent