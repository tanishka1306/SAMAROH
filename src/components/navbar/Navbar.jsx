import React from "react";
import {Link} from 'react-router-dom'
import Button from "./btn";


const Navbar = () => {

  return (
   
          <div>
    <div className="shadow-md w-full fixed top-0 left-0 bg-red-50 opacity-1"> 
    <div className="italic font-bold text-2xl cursor-pointer py-4 md:px-10 px-7 lg:float-left flex items-center font-[Poppins] text-red-400"> 
             SAMAROH
             </div>
          <div className="md:flex items-center lg:float-right justify-between flex-row py-4 md:px-10 px-7">
          
                 <ul className="md:flex md:items-center md:pb-0 pb-12 absolute md:static float-right bg-red-50 md:z-auto z-[-1] left-0 w-full ms:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in " >
                
                    <li className="md:ml-8 text-xl md:my-0 my-7 "> <Link className="text-red-400 hover:text-black duration-300" to="/home"  >Home</Link></li>
                    <li className="md:ml-8 text-xl md:my-0 my-7">  <Link className="text-red-400 hover:text-black duration-300"  to="/contactus"  >Contact Us</Link> </li>
                    <li className="md:ml-8 text-xl md:my-0 my-7"> <Link className="text-red-400 hover:text-black duration-300"  to="/contactus"  > See our Work</Link></li>
                    <li className="md:ml-8 text-xl md:my-0 my-7"> <Link className="text-red-400 hover:text-black duration-300"  to="/contactus"  >About Us</Link></li>
                    <Button className="float-right sm:mr-4">
                      Register
                    </Button>
                    <Button>
                      Login
                    </Button>
                 </ul>
      
      
          </div>

    </div>



  </div>
   
  );
};

export default Navbar;
