import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function ProdDetails() {
    const [state,setstate]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        click()
    },[])
    const click=()=>{
        axios.get(`https://dummyjson.com/products/${id}`).then((res)=>{
            console.log(res.data);
            setstate([res.data]);
        })
    }
  return (
    <div>
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
    <Button variant="primary">View Details</Button>
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

export default ProdDetails