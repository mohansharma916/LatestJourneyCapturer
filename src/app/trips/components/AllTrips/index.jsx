"use client";
import TourCard from "@/app/home/components/UpcomingTrips/Components/TourCard"
import tourData from "@/app/home/components/UpcomingTrips/Components/TourData";
import { useState } from "react";
const AllTrips = () => {
  const [currentIndex, setCurrentIndex] = useState(2);


  return (
    <>
      <div className="mx-20 mt-20 relative">
        <h3 className="text-4xl flex justify-center items-center mb-3.5 font-semibold">
          Upcoming Trips
        </h3>
        <p className="flex justify-center  items-center">
          We Curate The Best Experiences For You Based On Your Interests To
          Enjoy Over Weekend Get-aways Around Your City.
        </p>

        <div className="mt-10 flex  flex-wrap justify-center">
          {tourData.map((trip) => (
            <TourCard key={trip.id} tour={trip} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllTrips;
