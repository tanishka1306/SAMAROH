import React from 'react'
import Topbar from '../components/Topbar'
import {FaUserAlt,FaUserCheck} from 'react-icons/fa'
import {GoRequestChanges} from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
function Admin() {
  let navigate=useNavigate();
  const handleUser=()=>{
    navigate('/admin/users')
  }
  const handleRequest=()=>{
    navigate('/admin/requests')
  }
  return (
    <div>
        <Topbar/>
        <div className='flex gap-[30px] justify-center'>
            <div className='w-[200px] h-[200px] border-black border-4 ' onClick={handleUser} > <FaUserAlt size={30} className="mt-[85px] ml-[80px] text-[#00337C] cursor-pointer"/>  </div>
            <div className='w-[200px] h-[200px] border-black border-4 ' > <FaUserCheck size={40} className="mt-[80px] ml-[80px] text-[#00337C] cursor-pointer"/>  </div>
            <div className='w-[200px] h-[200px] border-black border-4 ' onClick={handleRequest}> <GoRequestChanges size={40} className="mt-[80px] ml-[80px] text-[#00337C] cursor-pointer"/> </div>
        </div>
    </div>
  )
}

export default Admin
