import React from "react";

function Cards() {
  return (
    <div className="text-center w-auto h-auto  ml-[30px] mt-[200px]">
    <h1 className="text-[40px] text-center w-full mt-[80px] mb-[100px]" id="h1">
      Some Services
    </h1>

    <div className="xl:flex xl:ml-2 md:ml-[300px] sm:ml-[50px]">
      <div className="2xl:flex flex-shrink ">
      <div className="sm:ml-[40px]">
          <div>
            <img
              className="w-[450px] h-[300px] border-[4px] border-black"
              src="./Images/service4.jpg"
              alt="loading"
            />
          </div>
          <div className="w-[450px] font-['Mulish'] h-[300px] mt-[25px] text-center">
            <h2 id="h1"> Food And beverages</h2>
            <p className="mt-[20px] ">
            At our event organizing company, we understand that food and beverage service
               is an important aspect of any successful event. We have experience
               in providing high-quality food and beverage service for a wide range
                of events, including weddings, corporate events, and festivals.
            </p>
          </div>
        </div>

        <div className="sm:ml-[40px]">
          <div>
            <img
              className="w-[450px] h-[300px] border-[4px] border-black"
              src="./Images/service2.jpg"
              alt="loading"
            />
          </div>
          <div className="w-[450px] font-['Mulish'] h-[300px] mt-[25px] text-center">
            <h2 id="h1">Event Management</h2>
            <p className="mt-[20px] ">
            We have experience in organizing a wide range of management
                events, including conferences, seminars, workshops, and more.Our
                team of experienced event planners will work with you to
                understand your goals for the event and create a customized plan
                that meets your needs and budget. We can help you with venue
                selection, catering, audiovisual equipment, promotional
                materials, and logistics, among other aspects of event planning.
            </p>
          </div>
        </div>
      </div>

      <div className="sm:ml-[40px]">
        <div>
          <img
            className="w-[450px] h-[300px] border-[4px] border-black"
            src="./Images/service3.jpg"
            alt="loading"
          />
        </div>
        <div className="w-[450px] font-['Mulish'] h-[300px] mt-[25px] text-center">
          <h2 id="h1">Live Entertainment</h2>
          <p className="mt-[20px]">
          We can help you with venue selection, artist selection, staging,
              lighting, sound, and logistics, among other aspects of event
              planning. We have established relationships with a variety of
              talented artists and performers, and can help you select the
              perfect talent to match your event and audience. We can also help
              you with promotional materials, such as posters, flyers, and
              social media posts, to ensure that your event is well-promoted and
              attracts the right audience.
          </p>
        </div>
      </div>
    </div>
    <hr className='bg-[#5a4a3b] h-[4px] mb-[50px]' />
  </div>
  );
}

export default Cards;
