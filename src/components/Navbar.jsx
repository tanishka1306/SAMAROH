import React, {useState, useEffect} from 'react'
import {BsChatSquareDots} from 'react-icons/bs'
import {FaFacebookF, FaInstagram, FaGooglePlusG, FaTwitter,FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handelNav = () => {
    setNav(!nav)
  }
  return (
    <div className='w-full min-h-[100px] flex justify-between items-center absolute z-10 text-white bg-gray-600/70 '>
      <ul className='hidden sm:flex px-4'>
        <li > <Link className="text-white text-xl hover:text-black duration-300" to="/home"  >Home</Link></li>
        <li>  <Link className="text-white text-xl hover:text-black duration-300"  to="/contactus"  >Contact Us</Link> </li>
        <li> <Link className="text-white text-xl hover:text-black duration-300"  to="/contactus"  > See our Work</Link></li>
        <li> <Link className="text-white text-xl hover:text-black duration-300"  to="/contactus"  >About Us</Link></li>
      </ul>
      <div className='flex justify-between '>
        <FaFacebookF className='mx-4'/>
        <FaInstagram className='mx-4'/>
        <FaGooglePlusG className='mx-4'/>
        <FaTwitter className='mx-4'/>
      </div>
      {/* bar  Icons  */}
      <div onClick={handelNav} className='sm:hidden z-10'>
        <FaBars size={20} className="mr-4 cursor-pointer" />  
      </div>
      <div onClick={handelNav} className={ 
          nav 
           ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0  w-full h-screen bg-black/90 px-4 py-7 flex flex-col' 
           : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
      <ul className='h-full w-full pt-12 text-center'>
        <li className='text-2xl py-8'> <Link className="text-white hover:text-gray-500 duration-300" to="/home"  >Home</Link></li>
        <li className='text-2xl py-8'>  <Link className="text-white hover:text-gray-500 duration-300"  to="/contactus"  >Contact Us</Link> </li>
        <li className='text-2xl py-8'> <Link className="text-white hover:text-gray-500 duration-300"  to="/contactus"  > See our Work</Link></li>
        <li className='text-2xl py-8'> <Link className="text-white hover:text-gray-500 duration-300"  to="/contactus"  >About Us</Link></li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
