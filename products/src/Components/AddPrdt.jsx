import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'

function AddPrdt() {
    const [state,setstate]=useState({
        id:'',
        title:''
    })
    const handleChange=(e)=>{
        setstate({...state,[e.target.name]:e.target.value})
    }

    const click=()=>{
        axios.post('https://dummyjson.com/products/add',state).then((res)=>{
            console.log(res.data);
        })
    }
  return (
    <div>
        <h1>Add Product</h1>
        <input type="text" name='id' onChange={handleChange} placeholder="id" /><br /><br />
        <input type="text" name='title' onChange={handleChange}  placeholder="title" /><br /><br />
        <Button onClick={click} variant="primary">Add</Button>
    </div>
  )
}

export default AddPrdt