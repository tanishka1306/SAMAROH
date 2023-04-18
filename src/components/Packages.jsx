import React from "react";

function Packages() {
  return (
    <div className="text-center w-auto h-auto font-['Mulish'] ml-[30px] mt-[100px]">
      <h1 className="text-[40px] text-center w-full mt-[80px] mb-[100px]" id="h1">
        Events 
      </h1>

      <div className="xl:flex xl:ml-2 md:ml-[300px]">
        <div className="2xl:flex flex-shrink ">
        <div className="sm:ml-[40px]">
            <div>
              <img
                className="w-[450px] h-[300px] border-[4px] border-black"
                src="./Images/service1.jpg"
                alt="loading"
              />
            </div>
            <div className="w-[450px] h-[300px] mt-[25px] text-center">
              <h2 id="h1"> Factory Open Day</h2>
              <p className="mt-[20px] font-['Mulish']">
                Our team of experienced event planners can help you with all
                aspects of your event, including venue selection, catering,
                audiovisual equipment, and logistics. We will work with you to
                understand your goals for the event and create a customized plan
                that meets your needs and budget.
              </p>
            </div>
          </div>

          <div className="sm:ml-[40px]">
            <div>
              <img
                className="w-[450px] h-[300px] border-[4px] border-black"
                src="./Images/service5.jpg"
                alt="loading"
              />
            </div>
            <div className="w-[450px] h-[300px] mt-[25px] text-center">
              <h2 id="h1">Light Shows</h2>
              <p className="mt-[20px] font-['Mulish']">
              At our event organizing company, we understand that lighting is a
               key element of any successful event. We have experience in organizing 
               a wide range of light shows for events, including concerts, corporate events, weddings, and more.
               Our team of experienced event planners will work with you to create a customized lighting plan
                that meets your needs and budget. We can help you with venue selection, equipment rental, 
                staging, and logistics, among other aspects of light show organizing.
              </p>
            </div>
          </div>
        </div>

        <div className="sm:ml-[40px]">
          <div>
            <img
              className="w-[450px] h-[300px] border-[4px] border-black"
              src="./Images/service6.jpg"
              alt="loading"
            />
          </div>
          <div className="w-[450px] h-[300px] mt-[25px] text-center">
            <h2 id="h1">Concerts</h2>
            <p className="mt-[20px] font-['Mulish']">
            Concerts are one of the most popular and exciting types of events.
             We have experience in organizing a wide range of concerts, including
              indoor and outdoor concerts, festivals, and more.
              Our team of experienced event planners will work with you to create
               a customized plan that meets your needs and budget. We can help 
               you with venue selection, artist selection, staging, lighting, sound
               , and logistics, among other aspects of concert organizing.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Packages;
