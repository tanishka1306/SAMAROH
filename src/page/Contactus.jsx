import React from "react";
import {FaFacebookF, FaInstagram, FaGooglePlusG, FaTwitter} from 'react-icons/fa'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";

function Contactus() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="font-['Mulish'] h-[700px] w-[1200px] mx-[180px] mt-[120px] xl:flex ">
        <div>
          <img className="h-[700px] w-[600px]"
          src="./Images/con2.jpg" alt="loading" />
        </div>
        <div className="font-bold h-[700px] w-[600px] pt-[120px] px-[40px] bg-[#D8D8D8] text-center ">
        <h1 className="text-[25px]">Welcome to our Contact Us page!</h1> <br /> <br /> 
          <p>
            At SAMAROH, we're always happy to hear from you. Whether you have a
            question about one of our services or just want to say hello, we're
            here to help.
          </p> <br />
          <p>
            Here's how you can get in touch with us: <br />
            9087-8765-987 <br />
            samaroh@gmail.com <br /> <br /> <br />
            <div className="flex justify-between ">
              <FaFacebookF className="mx-4" size={30}/>
              <FaInstagram className="mx-4" size={30}/>
              <FaGooglePlusG className="mx-4" size={30}/>
              <FaTwitter className="mx-4" size={30}/>
            </div>
          </p>
          <p> <br /> <br />
          Alone we can do so little; together we can do so much.
          </p>
          <p>
          we believe in the power of collaboration and teamwork. We know that
           by working together with our clients and partners, we can achieve great things and create memorable events that exceed expectations.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contactus;
