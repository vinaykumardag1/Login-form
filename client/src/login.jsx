import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';


const Login = () => {
    
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()

    const submit=(e)=>{
     e.preventDefault()
      const user=axios.post("http://localhost:5000/login",{email,password})
      .then((res)=>{console.log(res)
        if(res.data==="success"){
          navigate("/home")
        }else{
          alert(res.data)
        }
        
      
    })
      .catch(err=>console.log(err))
     
      
    }

    const style={
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      padding:"2rem",
      margin:"2rem"
    }

  return (
    <div style={style}>
     
      <form  onSubmit={submit}>
       <h1>Login</h1>
       <div className="form-group" >
        <label htmlFor="">Email</label>
        <input type="email" placeholder="Enter your email"
        className="form-control form-control-lg my-2"
        onChange={(e)=>setEmail(e.target.value)}
         required/>
        <label htmlFor="">Password</label>
        <input type="password" placeholder='Enter your password'
        className="form-control form-control-lg my-2"
        onChange={(e)=>setPassword(e.target.value)}
        required/>
        
        <button className='btn btn-primary mt-2 w-100' type='Submit' onClick={submit}>login</button>
      
        </div>
        
      </form>
    </div>
  )
}

export default Login
