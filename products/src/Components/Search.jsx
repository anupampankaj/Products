import axios from 'axios'
import React from 'react'
import { useState } from 'react'

function Search() {
    const [query,setquery]=useState('')



    const handleChange=(e)=>{
        setquery(e.target.value)
    }

    const click=()=>{
        axios.get('https://dummyjson.com/products/search?q=phone').then((res)=>{
            console.log("search is",res.data);
        })
    }
  return (
    <div>
        <input type="text" onChange={handleChange} placeholder='search' />
        <button onClick={click} >Search</button>
    </div>
  )
}

export default Search