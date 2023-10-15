import React from 'react';

const StepsInHowitWorks = ({ stepsData }) => {
  return (
   
      <div className="ml-5">
        <h4 className='text-xl mb-3 font-semibold'>{stepsData.MainHeading}</h4>
        <p>{stepsData.Details}</p>
      </div>
  );
};

export default StepsInHowitWorks;