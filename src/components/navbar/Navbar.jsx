import React, {useState} from "react";
import {Link} from 'react-router-dom'
// import Button from "./btn";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handelNav = () => {
      setNav(!nav) 
    }
  return (
   
  <div>
      <div 
         className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-rose-900">
            <h1 className="w-full text-4xl  ">
              S A M A R O H
            </h1>
            <ul className="hidden md:flex" >
                    <li className="p-4 text-2xl"> <Link className="text-red-900 hover:text-black duration-300" to="/home"  >Home</Link></li>
                    <li className="p-4 text-2xl">  <Link className="text-red-900 hover:text-black duration-300"  to="/contactus"  >Contact</Link> </li>
                    <li className="p-4 text-2xl"> <Link className="text-red-900 hover:text-black duration-300"  to="/contactus"  > Gallery</Link></li>
                    <li className="p-4 text-2xl"> <Link className="text-red-900 hover:text-black duration-300"  to="/contactus"  >About</Link></li>
            </ul>
            <div onClick={handelNav} className="block md:hidden">
              {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
             
            </div>
            <div className={!nav ? "fixed left-0 top-0 w-[60%] border-r h-full bg-[#F5EBEB] border-r-rose-200 ease-in-out duration-700" : "fixed left-[-100%]" }>  
                <h1 className="w-full text-4xl m-4">
                   S A M A R O H
                </h1>
              <ul className="pt-4 uppercase" >
                    <li className="p-4 border-b border-rose-300 font-bold text-[10px]"> <Link className="text-red-900 hover:text-black duration-300" to="/home"  >Home</Link></li>
                    <li className="p-4 border-b border-rose-300 font-bold  text-[10px]">  <Link className="text-red-900 hover:text-black duration-300"  to="/contactus"  >Contact</Link> </li>
                    <li className="p-4 border-b border-rose-300 font-bold  text-[10px]"> <Link className="text-red-900 hover:text-black duration-300"  to="/contactus"  > Gallery</Link></li>
                    <li className="p-4 font-bold text-[10px]"> <Link className="text-red-900 hover:text-black duration-300"  to="/contactus"  >About</Link></li>
              </ul>
            </div>
        </div>
    
  </div>
   
  );
};

export default Navbar;
