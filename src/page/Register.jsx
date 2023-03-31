import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


import Topbar from '../components/Topbar'

function Register() {
  let navigate = useNavigate();
  const [userData,setuserData] = useState({
    name: "",
    email:"",
    password: "",
    location: "",
  })
  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8000/api/createuser',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body:JSON.stringify({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        location: userData.location,
      })
    });
    const json = await response.json();
    console.log(json);
    if(json.success) {
      localStorage.setItem('token', json.authToken);
      navigate("/login")
  }
else{
  alert("enter valid credentials");
}}
  const handleChange = (event) => {
    setuserData({...userData, [event.target.name]: event.target.value})
  }
  return (
    
    <div>
     <Topbar />

      <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full '>
       <div className='hidden sm:block'>
       <img className='w-full h-full object-cover' 
       src='./Images/con2.jpg' alt="" />
       </div>
      <div className='bg-[#c9bca7] flex flex-col justify-center'>
         <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto bg-[#b3a692] shadow p-8 px-8'>
          <h1 className='text-4xl font-bold text-center'>REGISTRATION </h1>
          <p className='text-center text-[15px] mt-[10px]'>Join our family</p>
          <div className='flex flex-col py-2 '>
            <label htmlFor="">Name</label>
            <input type="text" name='name' onChange={handleChange} value={userData.name} className='rounded-lg bg-gray-700 mt-2 p-2 focus:bg-gray-800 focused:outline-none' />
          </div>
          <div className='flex flex-col py-2 '>
            <label htmlFor="">Email</label>
            <input type="email" name='email' onChange={handleChange} value={userData.email} className='rounded-lg bg-gray-700 mt-2 p-2 focus:bg-gray-800 focused:outline-none' />
          </div>
          <div className='flex flex-col py-2 '>
            <label htmlFor="">Password</label>
            <input type="password" name='password' onChange={handleChange} value={userData.password} className='rounded-lg bg-gray-700 mt-2 p-2 focus:bg-gray-800 focused:outline-none' />
          </div>
          <div className='flex flex-col py-2 '>
            <label htmlFor="">Address</label>
            <input type="text" onChange={handleChange} name='location' value={userData.location} className='rounded-lg bg-gray-700 mt-2 p-2 focus:bg-gray-800 focused:outline-none' />
          </div>
          <div className='flex gap-[20px] mt-[30px]'>
          <button className='btm-primary' type='submit'>SUBMIT</button> 
          <button> <Link to="/login">LOGIN</Link> </button> 
          </div>
        
         </form>
       </div>
    </div>
    </div>
  )
}

export default Register
