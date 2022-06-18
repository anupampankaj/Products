import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import {Button, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Categories from './Categories'
 
function Products() {

    const [state,setstate]=useState([])
    const [term,setterm]=useState('')

    useEffect(()=>{
        click()
    },[])
    const click=()=>{
        axios.get('https://dummyjson.com/products').then((res)=>{
            console.log(res.data.products);
            setstate(res.data.products);

        })
    }

    const handleChange=(e)=>{
        setterm(e.target.value)
    }

    const search=async()=>{
        await axios.get(`https://dummyjson.com/products/search?q=${term}`).then((res)=>{
            console.log("search is",res.data);
            setstate(res.data.products)
        })
    }

  return (
    <div>
        <div>
         <Link to='/cat' > <button>Show Catgories</button></Link><br /><br />
        </div>
        <div>
            <input onChange={handleChange} type="text" placeholder='search' />
            <button onClick={search}>Search</button><br /><br />
        </div>
       <Link to='/add' ><Button variant='primary' >Add</Button></Link> 
        <h1>Products</h1>
    <div>
        {
            state.map((i)=>{
                return(
                    <div>
                        <Card style={{ width: '18rem', margin:"50px" }}>
  <Card.Img variant="top" src={i.thumbnail} />
  <Card.Body>
    <Card.Title>{i.brand}</Card.Title>
    <Card.Title>{i.title}</Card.Title>
    <Card.Title>{i.price}</Card.Title>
    <Card.Text>
     {i.description}
    </Card.Text>
   <Link to={`/${i.id}`}> <Button variant="primary">View Details</Button></Link>
  </Card.Body>
</Card>
                        
                    </div>
                )
            })
        }
    </div>
    </div>
  )
}

export default Products