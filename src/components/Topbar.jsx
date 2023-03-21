import React from 'react'
import {AiFillPhone , AiOutlineClockCircle } from 'react-icons/ai'
import {GiTwirlyFlower} from 'react-icons/gi'


function Topbar() {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
        <div className='flex items-center'>
      <GiTwirlyFlower size={30} className="text-rose-800 mr-2" />
        <h1 className='text-2xl  text-rose-800'>S A M A R O H </h1>
      </div>
     <div className='flex'>
     <div className='hidden md:flex items-center px-6'>
       <AiOutlineClockCircle size={20} className="mr-2 " />
        <p className='text-sm '>9AM - 5PM </p>
      </div>
      <div className='hidden md:flex items-center px-6'>
        <AiFillPhone size={20} className="mr-2"/>
        <p className='text-sm'>7-88-987-9876</p>
      </div>
     </div>
    </div>
  )
}

export default Topbar;
