import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button } from 'react-bootstrap'

function Categories() {
    const [state,setstate]=useState([])
    const [term,setterm]=useState('')

    useEffect(()=>{
        click()
    },[])
    const click=()=>{
        axios.get('https://dummyjson.com/products/categories').then((res)=>{
            console.log(res.data);
            setstate(res.data);
        })
    }

   


  return (
    <div>
        <h1>Categories</h1>
       
        <div>
           {
            state.map((i)=>{
                return(
                    <div>
                        <h3>{i}</h3>
                        <h3>{i.brand}</h3>
                    </div>
                )
            })
           }
        </div>
    </div>
  )
}

export default Categories