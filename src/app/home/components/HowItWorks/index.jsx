import React from 'react';
import StepsInHowitWorks from './Steps'; // Import the component using curly braces

const HowItWorks = () => {
  const stepsData = [
    {
      MainHeading: '1. Register With Us',
      Details: "Sign up and become a part of our vibrant travel community. It's easy and free! Register to access a world of exciting journeys.",
    },
    {
      MainHeading: '2. Complete Your Profile',
      Details: 'Tell us more about yourself. Fill in your profile details so we can personalize your travel experience',
    },
    {
      MainHeading: '3. Choose Your Location & Dates',
      Details: 'Browse our list of fantastic destinations and select your preferred dates. We offer flexibility to match your schedule.',
    },
    {
      MainHeading: '4. Now Get Ready And Travel',
      Details: "Pack your bags and get ready for a memorable adventure. We'll handle the rest, capturing your journey from start to finish. Enjoy your trip!",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center pt-20 font-bold text-2xl">
        <div className="border-r-2 border-gray-400 pr-4 ">
          <h3>How It Works</h3>
        </div>
        <div className="pl-4"> <h3>Join us in 4 Steps</h3></div>
      </div>
      <div className="flex justify-evenly  mt-10 mx-[132px]">
      {stepsData.map((step, index) => (
        <div
        key={index}
        className={`${
          index < 3 ? 'border-r border-gray-400 pr-4' : '' // Apply the conditional right border directly to the div
        }`}
      >
        <StepsInHowitWorks key={index} stepsData={step}  className={index<3?'border-r-2 border-gray-400 pr-4':''}/> 
        </div>
      ))}
      </div>
    </>
  );
};

export default HowItWorks;
