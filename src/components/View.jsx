import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const View = () => {
    const [data, setData]=useState(
       { "quotes":[]}
    )
            const fetchData=()=>{
            axios.get("https://dummyjson.com/quotes").then(
                (resonse)=>{
                    setData(resonse.data)
                }
            ).catch().finally()
        }
        useEffect(()=>fetchData(),[])
            
     return (
    <div>
        <NavBar/>
        <h1><center>VIEW</center></h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">QUOTE</th>
      <th scope="col">AUTHOR</th>
    </tr>
  </thead>
  <tbody>
  {data.quotes.map(
    (value, index)=>{
        return <tr>
        <td>{value.id}</td>
        <td>{value.quote}</td>
        <td>{value.author}</td>
      </tr>
       }
    )} 
        
      </tbody>
    
</table>

                </div>
            </div>
        </div>
    </div>
  )
}

export default View