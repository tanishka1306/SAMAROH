import React from 'react'
// import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { useState } from 'react'
import {IoMdClose} from 'react-icons/io'

const Model = ({open,onClose }) => {

  const [credentials , setcredentials]=useState({name:"",email:"",event_type:"",venue:"",dateI:"",dateF:""})
  let navigate = useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const  response = await fetch("http://localhost:8000/api/request",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
          email:localStorage.getItem('userEmail'),
            name:credentials.name,
            event_type:credentials.eventType,
            venue:credentials.venue,
            dateI:credentials.dateI.toString(),
            dateF:credentials.dateF.toString(),
    })
    });
    const json = await response.json();
    console.log(json);

 if(json.success){
  localStorage.setItem('request', json.bookingRequest)
  alert("Booking request send")
  navigate('/')
 }
 else {
  alert("Something went wrong")
 }

}
const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
}


    if(!open) return null

    const options = [
      {
        label:"Select",
        value:"Select",
      },
      {
        label:"Wedding",
        value: "Wedding",
      },
      {
        label :"Competitions",
        value: "Competitions",
      },
      {
        label:"Birthday",
        value: "Birthday",
      },
      {
        label:"Baby Shower",
        value: "Baby Shower",
      },
      {
        label:"Conferences",
        value: "Conferences",
      }, {
        label:"Lunch Party",
        value: "Lunch Party",
      }, {
        label:"Beach Party",
        value: "Beach Party",
      }, {
        label:"Corporate Event",
        value: "Corporate Event",
      }, {
        label:"Concerts and Shows",
        value: "Concerts and Shows",
      }, {
        label:"Light Shows",
        value: "Light Shows",
      }, {
        label:"Festivals and Fairs",
        value: "Festivals and Fairs",
      }, {
        label:"Yoga Session",
        value: "Yoga Session",
      },
    ]; 
  
  return (
    <div className='text-black xl:ml-[-52%] md:ml-[-55%] sm:ml-[-10px] mt-[180px] w-[600px] h-[400px] text-center border-[10px] bg-stone-800/80 border-black absolute'>
           <p onClick={onClose} className='float-right' ><IoMdClose size={30} className='cursor-pointer bg-white'/></p> <br />
           <h1 className='text-[20px] ml-[40px] text-white'>__ Make your booking now __</h1> <br />
      <form onSubmit={handleSubmit}>
      <label className='text-white bold mr-[10px]' htmlFor="">Name</label> 
      <input type="text" placeholder=''name='name' value={credentials.name} onChange={onChange}/><br /><br />

      <label htmlFor="" className='text-white bold mr-[10px]'>Event type</label>
      <select placeholder='Select'name='eventType' value={credentials.eventType} onChange={onChange}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select> <br /> <br />

      <label htmlFor="" className='text-white bold mr-[10px]'>Venue</label>
      <input type="text" name='venue' value={credentials.venue} onChange={onChange}/> <br /> <br /> 

<div className='flex gap-2 ml-[85px] '>
  <div>
  <label htmlFor="" className='text-white bold mr-[10px]'>Date</label>
      <input type="date" name='dateI' value={credentials.dateI} onChange={onChange} /><br /><br /><br />
      
  </div>
  <div >
  <label htmlFor="" className='text-white bold mr-[10px]'>Date</label>
      <input type="date" name='dateF' value={credentials.dateF} onChange={onChange}/><br /><br /><br />
      
  </div>
</div>
      
 
      <button className='hover:bg-white hover:text-black text-white border-2 rounded-xl duration-700'>Book</button>
      <br />

      </form>
    </div>
  )
}

export default Model
