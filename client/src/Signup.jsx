import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()

    const submit=(e)=>{
      if(name==="" || email==="" || password===""){
        alert("Please enter your name")
      }else{
        e.preventDefault()
        const user=axios.post("https://login-form-backend-hi12.onrender.com",{name,email,password})
      .then((res)=>{console.log(res)
      navigate("/login")
    })
      .catch(err=>console.log(err))
      }
 
      
     
    }

    const style={
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      padding:"2rem"
    }

  return (
    <div style={style}>
     
      <form  onSubmit={submit}>
       <h1>Signup</h1>
       <div className="form-group w-100" >
        <label htmlFor="name">Name</label>
        <input type="text" id='name' placeholder="Enter your name"
        className='form-control form-control-lg my-2'
        onChange={(e)=>setName(e.target.value)}
        required/>

        <label htmlFor="email">Email</label>
        <input type="email" id='email' placeholder="Enter your email"
        className="form-control form-control-lg my-2"
        onChange={(e)=>setEmail(e.target.value)}
         required/>
        <label htmlFor="passwd">Password</label>
        <input type="password" id='passwd' placeholder='Enter your password'
        className="form-control form-control-lg my-2"
        onChange={(e)=>setPassword(e.target.value)}
        required/>
        
        <button className='btn btn-primary mt-3 w-100' type='Submit' onClick={submit}>Register</button>
      
        </div>
        <p>already have an accont?</p>
        
        <Link to='/login'>
        <button className="btn btn-success btn-sm w-100" >
         Login
        </button>
        </Link>
      </form>
    </div>
  )
}

export default Signup
