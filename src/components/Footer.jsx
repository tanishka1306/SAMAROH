import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGooglePlusG,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#C8B6A6] text-center mt-[200px] flex items-center">
     <div className="mx-auto my-auto">
     <div>
        <img src="./Images/Logo.png" alt="" />
      </div>
      <div className="flex justify-between mt-[50px]">
        <FaFacebookF className="mx-4" />
        <FaInstagram className="mx-4" />
        <FaGooglePlusG className="mx-4" />
        <FaTwitter className="mx-4" />
      </div>

      <p className="mt-[100px]">Copyright © 2023 S A M A R O H</p>
     </div>
    </div>
  );
}

export default Footer;
