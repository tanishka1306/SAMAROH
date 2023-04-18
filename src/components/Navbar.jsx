import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import Model from '../components/Model';

const Navbar = () => {



  const [nav, setNav] = useState(false)
  const handelNav = () => {
    setNav(!nav)
  }
  let navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('authToken')
    navigate("/");
  }
//pop up
  const [openModel, setOpenModel] = useState(false)

  return (
    <div className="w-full min-h-[70px] flex justify-between items-center absolute z-10 text-white font-['Mulish'] bg-gray-800/70 ">
      <ul className='hidden sm:flex px-4'>
        <li > <Link className="text-white text-[15px] hover:text-black duration-300" to="/"  >Home</Link></li>
        <li > <Link className="text-white text-[15px] hover:text-black duration-300" to="/service"  >Services</Link></li>
        <li>  <Link className="text-white text-[15px] hover:text-black duration-300"  to="/contactus"  >Contact Us</Link> </li>
        <li> <Link className="text-white text-[15px] hover:text-black duration-300"  to="/gallery"  > See our Work</Link></li>
        <li> <Link className="text-white text-[15px] hover:text-black duration-300"  to="/aboutus"  >About Us</Link></li>
      </ul>
      
      {(!localStorage.getItem("authToken")) ?  
       <div className='flex justify-between'>
        <Link to="/register" className="text-white text-xl hover:text-black duration-300 mr-[20px]" > Register </Link>
        <Link to="/login" className="text-white text-xl hover:text-black duration-300 mr-[20px]" > login </Link>
      </div>  : 
      <div className='flex justify-between gap-3'>
        <button onClick={() => setOpenModel(true)} className='hover:bg-stone-600 duration-700'> Reservation </button> 
        <Model open={openModel} onClose={() => setOpenModel(false)}/>
        <div onClick={logout} className="text-white text-xl mt-[7px] hover:text-black duration-300 mr-[20px]" > Logout </div>

      </div>
      }
      
      {/* bar  Icons  */}
      <div onClick={handelNav} className='sm:hidden z-10'>
        <FaBars size={20} className="mr-4 cursor-pointer" />  
      </div>
      <div onClick={handelNav} className={ 
          nav 
           ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0  w-full h-screen bg-black/90 px-4 py-7 flex flex-col' 
           : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
      <ul className='h-full w-full pt-12 text-center'>
        <li className='text-2xl py-8 '> <Link className="text-white hover:text-gray-500 duration-300" to="/home"  >Home</Link></li>
        <li className='text-2xl py-8'>  <Link className="text-white hover:text-gray-500 duration-300"  to="/service"  >Service</Link> </li>
        <li className='text-2xl py-8'>  <Link className="text-white hover:text-gray-500 duration-300"  to="/contactus"  >Contact Us</Link> </li>
        <li className='text-2xl py-8'> <Link className="text-white hover:text-gray-500 duration-300"  to="/contactus"  > See our Work</Link></li>
        <li className='text-2xl py-8'> <Link className="text-white hover:text-gray-500 duration-300"  to="/contactus"  >About Us</Link></li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
