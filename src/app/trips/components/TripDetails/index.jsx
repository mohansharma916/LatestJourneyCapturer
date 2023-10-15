"use client";
import { React, useEffect, useState } from "react";
import Description from "./Description";
import DatesCosting from "./DatesCosting";
import Itineary from "./Itineary";
import Inclusion from "./Inclusion";
import Exclusion from "./Exclusion";
import TripData from "../TripData/TripData";

const Tripdetails = ({
  description,
  itineary,
  dates,
  inclusion,
  exclusion,
}) => {
  const tabItems = [
    "Description",
    "Itineary",
    "Dates & Costing",
    "Inclusion",
    "Exclusion",
  ];
  const [selectedItem, setSelectedItem] = useState(1);
  return (
    <>
      <div className="px-4 mb-8 md:px-8">
        <ul
          role="tablist"
          className="hidden max-w-screen-xl mx-auto px-2.5 items-center gap-x-3 overflow-x-auto text-sm bg-gray-50 rounded-lg sm:flex"
        >
          {tabItems.map((item, idx) => (
            <li key={idx} className="py-2">
              <button
                role="tab"
                aria-selected={selectedItem == idx ? true : false}
                aria-controls={`tabpanel-${idx + 1}`}
                className={`py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-white active:bg-white/50 font-medium ${
                  selectedItem == idx
                    ? "bg-white text-indigo-600 shadow-sm"
                    : "text-gray-500"
                }`}
                onClick={() => {
                  setSelectedItem(idx);
                }}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <div className="relative text-gray-500 sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="pointer-events-none w-5 h-5 absolute right-2 inset-y-0 my-auto"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
          <select
            value={tabItems[selectedItem]}
            className="p-3 w-full bg-transparent appearance-none outline-none border rounded-lg shadow-sm focus:border-indigo-600"
            onChange={(e) => setSelectedItem(tabItems.indexOf(e.target.value))}
          >
            {tabItems.map((item, idx) => (
              <option key={idx} idx={idx}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="max-w-screen-xl mx-auto px-2.5 bg-white items-center  ">
          {selectedItem === 0 && <Description content={description} />}
          {selectedItem === 1 && <Itineary content={itineary} />}
          {selectedItem === 2 && <DatesCosting content={dates} />}
          {selectedItem === 3 && <Inclusion content={inclusion} />}
          {selectedItem === 4 && <Exclusion content={exclusion} />}
        </div>
      </div>
    </>
  );
};

export default Tripdetails;
