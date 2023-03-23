import React from "react";

function Packages() {
  return (
    <div className="text-center w-auto h-auto ml-[30px]">
      <h1 className="text-[40px] text-center w-full mt-[80px] mb-[100px]">
        EVENTS PACKAGES
      </h1>

      <div className="xl:flex ml-2">
        <div className="2xl:flex flex-shrink ">
          <div className="sm:ml-[40px]">
            <div>
              <img
                className="w-[450px] h-[300px] border-[4px] border-black"
                src="./Images/h2.png"
                alt="loading"
              />
            </div>
            <div className="w-[450px] h-[300px] mt-[25px] text-center">
              <h2>Weddings at InterContinental Sorrento</h2>
              <p className="mt-[20px]">
                Celebrate your dream wedding at an iconic seaside destination.
                Allow us to bring your vision to life, and embark on life’s
                biggest adventure surrounded by sun-kissed limestone, timeless
                elegance, and a vibrant coastal atmosphere. Select one of our
                packages, or create a truly personalised experience with our
                Events team. Plan your dream day. Contact one of our Events
                Specialists at meetings.icsorrento@ihg.com.
              </p>
            </div>
          </div>

          <div className="sm:ml-[40px]">
            <div>
              <img
                className="w-[450px] h-[300px] border-[4px] border-black"
                src="./Images/resort.jpg"
                alt="loading"
              />
            </div>
            <div className="w-[450px] h-[300px] mt-[25px] text-center">
              <h2>Sorrento Private Residence Package</h2>
              <p className="mt-[20px]">
                Create a truly bespoke event with Sorrento Private Residence.
                Carefully tailored to those seeking a private and collaborative
                space to enhance their business and connect as a team, this
                package includes exclusive use of the hotel’s accommodation and
                Pool Deck, sole access to three elegant meeting spaces, and
                select meals created by award-winning chef, Scott Pickett. View
                Brochure
              </p>
            </div>
          </div>
        </div>

        <div className="sm:ml-[40px]">
          <div>
            <img
              className="w-[450px] h-[300px] border-[4px] border-black"
              src="./Images/reward.png"
              alt="loading"
            />
          </div>
          <div className="w-[450px] h-[300px] mt-[25px] text-center">
            <h2>Be Rewarded</h2>
            <p className="mt-[20px]">
              Make event planning more rewarding with IHG® Business Rewards.
              Earn 3 points* for every $1USD spent on qualifying bookings made
              for others. Enjoy access to all of the redemption options
              available in our IHG Rewards Club global catalogue, including
              hotel stays, air travel, and much more. *Terms and conditions
              apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;
