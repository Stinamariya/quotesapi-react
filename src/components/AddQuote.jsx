import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddQuote = () =>{
    const [data, setdata]=useState(
        {
            "id":"",
            "quote":"",
            "author":""
        }
    )
   const inputHandler=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
   }
   const readValue=()=>{
    console.log(data)
   }
  return (
    <div>
        <NavBar/>
        <h1><center>ADD QUOTES</center></h1>
        <div className="container">
            
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">ID</label>
                            <input type="text" className="form-control"name='id'value={data.id}onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">QUOTE</label>
                            <input type="text" className="form-control"name='quote'value={data.quote}onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">AUTHOR</label>
                            <input type="text" className="form-control"name='author'value={data.author}onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <br />
                            <center><button className="btn btn-success"onClick={readValue}>Submit</button></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddQuote