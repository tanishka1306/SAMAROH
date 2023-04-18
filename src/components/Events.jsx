import React from "react";

function Events() {
  return (
    <div className="mt-[100px] " id="h1">
      <div className="text-center  " >
        <h1 className="text-[40px] mb-[100px]  ">CURATED MEETINGS AND EVENTS</h1>
        <p className="md:mx-[200px] sm:mx-[40px] font-['Mulish'] text-[15px]">
          Elevate your next event with the glamour and sophistication of our Art
          Deco-inspired event spaces. Located in the limestone Heritage Wing of
          our seaside hotel, our venues offer breathtaking views of the Sorrento
          foreshore and stylish furnishings bathed in natural light. Perfect for
          weddings, birthdays, meetings, and special occasions, our versatile
          spaces can be tailored to fit your needs. From banquet celebrations to
          cocktail affairs, our flexible event packages offer a range of menu
          and seating options to create a bespoke experience. Let our skilled
          events team help you plan the perfect intimate evening or grand
          soirée. Contact us today to start planning your dream event.
        </p>
      </div>
      <div className="2xl:flex justify-center text-center my-[100px] mx-[50px]">
        <img
          className="md:w-[800px] lg:w-[1000px] lg:ml-[0px] lg:h-[600px] sm:w-[600px] sm:ml-[40px] sm:h-[300px] border-[4px] border-[#867070] "
          src="./Images/stage.jpg"
          alt=""
        />

        <div className="mx-[20px] lg:mt-[100px]">
          <h1 className="text-[35px]  ">GRAND EVENTS</h1> <br />
          <p className="font-['Mulish']">
          At our company, we believe that the stage decor sets the tone for the entire event.
           Our team works closely with our clients to understand their vision and create a design
            proposal that meets their expectations. Our experienced designers use their creativity
             and expertise to develop a decor plan that enhances the overall theme of the event, 
             creating an ambiance that will leave a lasting impression on the attendees.Our production 
             team is dedicated to creating high-quality decor elements that are visually appealing and functional. 
          </p>
        </div>
      </div>
      <hr className='bg-[#5a4a3b] h-[4px] mb-[50px]' />
    </div>
  );
}

export default Events;
