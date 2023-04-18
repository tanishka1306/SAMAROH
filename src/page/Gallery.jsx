import React from "react";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Packages from "../components/Packages";
import Topbar from "../components/Topbar";

function Gallery() {
  return (
    <div className="font-['Mulish']">
      <Topbar />
      <Navbar />
      <div>
        <img src="./Images/gallery.png" alt="loading" />
      </div>
      <div  className=" mt-[200px] ml-[30px] text-center xl:flex gap-[100px]">
        <div className="mt-[60px]">
          <h1 id="h1" className="text-[30px] bold">
            LOOKING FOR THE BEST PLANNERS FOR EVENT / OCCASION ? <br /> <br />
          </h1>
          <p className="w-[900px]">
            YOU ARE AT THE RIGHT PLACE. WE HAVE THE BEST TEAM TO MAKE YOUR DAY.
            FROM YOUR CHILD'S FIRST BIRTHDAY TO YOUR PARENTS 50TH ANNIVERSARY,
            YOUR SPECIAL DAY IS OUR RESPONSIBILITY. SO JUST RELAX AND LET
            SAMAROH DO THEIR MAGIC.
          </p>
          
        </div>
        
        <div>
          <img className=" h-[300px]" src="./Images/gallery4.jpg" alt="" />
        </div>
      </div>
      <div className="mt-[150px] text-center">
      <hr className='bg-[#5a4a3b] h-[4px] mb-[50px]' />
        <Cards/>
        <Packages/>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
