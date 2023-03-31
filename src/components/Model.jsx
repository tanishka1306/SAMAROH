import React from 'react'
import {IoMdClose} from 'react-icons/io'
const Model = ({open,onClose }) => {
    if(!open) return null
  return (
    <div className='text-black xl:ml-[-52%] md:ml-[-55%] sm:ml-[-10px] mt-[180px] w-[600px] h-[400px] text-center border-[10px] bg-stone-800/80 border-black absolute'>
           <p onClick={onClose} className='float-right' ><IoMdClose size={30} className='cursor-pointer bg-white'/></p> <br />
           <h1 className='text-[20px]'>__ Make your booking now __</h1> <br />
      <form action="">
      <label className='text-white bold mr-[10px]' htmlFor="">Number of guest</label> 
      <input type="number" placeholder='ex. 200'/><br /><br /><br />

<div className='flex gap-2 ml-[85px] '>
  <div>
  <label htmlFor="" className='text-white bold mr-[10px]'>Date</label>
      <input type="date" name="" /><br /><br /><br />
      
  </div>
  <div >
  <label htmlFor="" className='text-white bold mr-[10px]'>Date</label>
      <input type="date" name="" /><br /><br /><br />
      
  </div>
</div>
      
      <label htmlFor="" className='text-white bold mr-[10px]'>Type of event</label>
      <input type="text" placeholder='ex. bday, wedding' /> <br /><br />
      <button className='hover:bg-white hover:text-black text-white border-2 rounded-xl duration-700'>Book</button>
      <br />

      </form>
    </div>
  )
}

export default Model
