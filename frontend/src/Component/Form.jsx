import axios from 'axios'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import React, { useState } from 'react'

export default function Form() {
  let [ name,setName ] = useState("")
  let [ email,setEmail ] = useState("")
  let [ pswd,setPswd ] = useState("")
  let [ age,setAge] = useState(0)


  function clear(){

  }
  function sav_data(){
try{
   let resp =  axios.post("http://localhost:3002/web/reg",{
    name: name,
    email:email,
    password:pswd,
    age:age,
    })
    console.log(resp.response)
    toast.success("Data Saved Successfully");
    clear();
}catch (error){
    toast.error(error)
    console.log(error)
}
  }


  return (
    <div className='container'>
        <h2>User Registration Form</h2><hr />
        <p>Enter your Name</p>
        <input type="text" 
        placeholder='Enter Your Name' 
        className="form-control my-2"
        value={name}
        onChange={(e)=>setName(e.target.value)} />

        <p>Enter Your Email</p>
        <input type="email" 
        placeholder='Enter Your Email'
        className="form-control my-2"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>

        <p>Enter Your Password</p>
        <input type="password"
        placeholder='Enter Your password'
        className="form-control my-2"
        value={pswd}
        onChange={(e)=>setPswd(e.target.value)}/>

 
        <p>Enter Your Age</p>
        <input type="Age"
        placeholder='Enter Your Age'
        className="form-control my-2"
        value={age}
        onChange={(e)=>setAge(e.target.value)}/>

        <button className='btn btn-outline-success my-2' onClick={sav_data}>Submit</button>
        <ToastContainer/>
        </div>
        
  )
}
