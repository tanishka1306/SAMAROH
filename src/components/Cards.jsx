import React from "react";

function Cards() {
  return (
    <div className="text-center w-auto h-auto ml-[30px]">
      <h1 className='text-[40px] text-center w-full mt-[200px] mb-[100px]' >
       EVENTS SPACES
        </h1>



      <div className="xl:flex ml-2">
      <div className="2xl:flex flex-shrink ">
        <div className="sm:ml-[40px]">
      <div >
           <img className="w-[450px] h-[300px] border-[4px] border-black"
            src="./Images/h1.png" alt="loading" />
        </div>
       <div className="w-[450px] h-[300px] mt-[25px] text-center">
        <h2>Halcyon Hall</h2>
        <p className="mt-[20px]">
        Experience coastal splendour and historic decadence at Halcyon Hall. Celebrate beneath the ambient light of ornate chandeliers, 
        and be inspired by the extravagant Art Deco interior. Our largest event space, 
        the Hall is lined with lofty windows and French doors, revealing ocean views and opening onto Sunset Terrace. Room size: 224 sqm
        </p>
       </div>
      </div>


      <div className="sm:ml-[40px]">
      <div >
           <img className="w-[450px] h-[300px] border-[4px] border-black"
            src="./Images/h3.png" alt="loading" />
        </div>
       <div className="w-[450px] h-[300px] mt-[25px] text-center">
        <h2>Sunset Terrace</h2>
        <p className="mt-[20px]">
        Sunset Terrace is the perfect venue for a refined, yet carefree seaside experience. With room to mingle and entertain, and breathtaking 
        ocean views at your fingertips, immerse your guests in Sorrento’s 
        vibrant coastal atmosphere. This alluring space can also be booked in conjunction with our spectacular Halcyon Hall. Room Size: 135 sqm
        </p>
       </div>
      </div>


      </div>

      <div className="sm:ml-[40px]">
      <div >
           <img className="w-[450px] h-[300px] border-[4px] border-black"
            src="./Images/hall.jpeg" alt="loading" />
        </div>
       <div className="w-[450px] h-[300px] mt-[25px] text-center">
        <h2>The Gallery</h2>
        <p className="mt-[20px]">
        A sophisticated and versatile space, The Gallery is the perfect venue for an elegant meeting or intimate event. 
        Large windows flood the room with natural light and provide ocean views. 
        This space is ideal for a meeting of the minds, with precisely tailored furnishings and packages available to suit your needs. Room size: 105 sqm
        </p>
       </div>
      </div>
    </div>
    </div>
    
  );
}

export default Cards;
