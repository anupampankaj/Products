import React from 'react'

function Cat() {
    const [state,setstate]=useState([])
    const [term,setterm]=useState('')

    const handleChange=(e)=>{
        setterm(e.target.value)
    }

    const search=()=>{
        axios.get(`https://dummyjson.com/products/category/${term}`).then((res)=>{
            console.log("search is",res.data);
            console.log("search is",res.data);
        })
    }
  return (
    <div>
        <div>
        <input onChange={handleChange} type="text" placeholder='Search by Category' /><br /><br />
        <Button variant='primary' onClick={search} >Search</Button>
        </div>
    </div>
  )
}

export default Cat