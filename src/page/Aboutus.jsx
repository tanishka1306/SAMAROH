import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'

function Aboutus() {
  return (
    <div className="" id='h1'>
        <Topbar />
        <Navbar />
      <div className='bg-[#C8B6A6] w-[1200px] h-[430px] mt-[250px] relative ml-[100px] shrink'>
        <h1 className='text-[60px] w-[300px] z-10 absolute ml-[30px] mt-[20px] text-center' >  WHO  <br />
            ARE WE .?</h1>
            <p className='text-[15px] font-bold w-[300px] z-10 absolute ml-[60px] mt-[250px] text-center'> <br /> We are a team of extremely passionate and hardworking group of
             people to make your dream event come true.</p>
            <div className='bg-[#675D50] w-[400px] h-[500px] ml-[600px] xl:mt-[-140px] absolute z-10'>
                <img className='w-[330px] h-[450px] pt-[55px] pl-[60px]'
                src="./Images/about1.jpg" alt="" />
            </div>
      </div>
      <div className='bg-[#C8B6A6] h-[250px] w-[1583px] mt-[100px] text-center relative'>
        <p className=' py-[80px] px-[150px] '>
        We are a team of passionate event planners who specialize in creating unforgettable experiences for our clients. With years of experience in the industry,
        we have developed the skills and expertise needed to turn any event into a memorable occasion.
        Our team is dedicated to providing top-notch event planning services that cater to all of your needs. Whether you are planning a corporate event, wedding,
        birthday party, or any other special occasion, we have the knowledge and resources to make it a success.
        </p>
      </div>
      
      <div className="2xl:flex justify-center text-center my-[100px] mx-[50px]">
        <img
          className="md:w-[800px] lg:w-[1000px] lg:ml-[0px] lg:h-[600px] sm:w-[600px] sm:ml-[40px] sm:h-[300px] border-[4px] border-[#867070] "
          src="./Images/hall1.jpeg"
          alt=""
        />

        <div className="mx-[20px] lg:mt-[150px]">
          <h1 className="text-[35px]  ">GRAND FUNCTION HALLS</h1> <br />
          <p className="font-['Mulish']">
            Our spectacular Art Deco style Grand Ballroom effortlessly weaves
            historic glamour with modern style. Once home to candle lit evenings
            and grand orchestras, this opulent, boutique style ballroom is the
            perfect v enue for your next function. Natural light floods the
            space, illuminating polished wooden floors, tailored fittings, and
            extravagant chandeliers.
          </p>
        </div>
      </div>
        <Footer />
    </div>
  )
}

export default Aboutus
