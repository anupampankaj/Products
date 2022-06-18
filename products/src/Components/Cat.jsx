import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Cat() {
    const [state,setstate]=useState([])
    const [term,setterm]=useState('')

    const handleChange=(e)=>{
        setterm(e.target.value)
    }

    const search=()=>{
        axios.get(`https://dummyjson.com/products/category/${term}`).then((res)=>{
            console.log("search is",res.data.products);
            setstate([res.data.products]);
        })
    }
  return (
    <div>
        <div>
        <input onChange={handleChange} type="text" placeholder='Search by Category' /><br /><br />
        <Button variant='primary' onClick={search} >Search</Button>
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
    </div>
  )
}

export default Cat