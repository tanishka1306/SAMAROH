import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";

function Gallery() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <div>
        <img src="./Images/gallery.png" alt="loading" />
      </div>
      <div className=" mt-[200px] ml-[30px] text-center xl:flex gap-[100px]">
        <div className="mt-[60px]">
          <h1 className="text-[30px]">
            LOOKING FOR THE BEST PLANNERS FOR YOUR SPECIAL DAY ? <br /> <br />
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
        <h1 className="text-[30px] ">CHECK OUT OUR EVENTS </h1>

        <div className="xl:flex ml-2 mt-[80px]">
          <div className="2xl:flex flex-shrink ">
            <div className="sm:ml-[40px]">
              <div>
                <img
                  className="w-[450px] h-[300px] border-[4px] border-black"
                  src="./Images/gallery5.jpg"
                  alt="loading"
                />
              </div>
              <div className="w-[450px] h-[100px] mt-[25px] text-center">
                <h2>KEVIN and ROSE</h2>
                <p className="mt-[20px]">
                  Indoor dreamy wedding .A lifelong commitment and a day that one can never forget so we made it a unforgettable. 
                </p>
              </div>
            </div>

            <div className="sm:ml-[40px]">
              <div>
                <img
                  className="w-[450px] h-[300px] border-[4px] border-black"
                  src="./Images/bdy.jpeg"
                  alt="loading"
                />
              </div>
              <div className="w-[450px] h-[100px] mt-[25px] text-center">
                <h2>MIA's 1st birthdayy</h2>
                <p className="mt-[20px]">
                  1st birthday's are always special and we understand that, Customized theme part according to clients wishes.
                </p>
              </div>
            </div>
          </div>

          <div className="sm:ml-[40px]">
            <div>
              <img
                className="w-[450px] h-[300px] border-[4px] border-black"
                src="./Images/function.jpeg"
                alt="loading"
              />
            </div>
            <div className="w-[450px] h-[100px] mt-[25px] text-center">
              <h2>RIA's family function</h2>
              <p className="mt-[20px]">
               Family functions are everyone's favorite , here we are to make it even more fun and beautiful. We Customized the party
                according to the theme you want.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
