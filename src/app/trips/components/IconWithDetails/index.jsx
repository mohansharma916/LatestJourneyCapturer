import { BiTimeFive } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
const IconWithDetails = ({ duration, pickUpAndDrop }) => {
  return (
    <>
      {/* <div className="flex mx-20 justify-evenly w-1/2 justify-center items-center w-16 h-16 bg-blue-500 rounded-full">
    <div>
    <BiTimeFive  size={100}/>
    <h3>Duration</h3>
    <p>{duration}</p>
    </div>
    <div>
        <FaLocationDot size={100} />
        <h3>Pick Up & Drop</h3>
        <p>{pickUpAndDrop}</p>

    </div>
    </div> */}
      <div className="flex justify-evenly w-1/2 my-10">
        <div>
          <div className="w-20 h-20 bg-[#666e71] rounded-full flex flex-col items-center justify-center">
            <BiTimeFive className="text-white text-4xl" />
          </div>
          <p className="mt-2 text-black text-xl">Duration</p>
          <p className="mt-2 text-black text-2xl"> {duration}</p>
        </div>
        <div>
          <div className="w-20 h-20 bg-[#666e71] rounded-full flex flex-col items-center justify-center">
            <FaLocationDot className="text-white text-4xl" />
          </div>
          <p className="mt-2 text-black text-xl">Pick & Drop</p>
          <p className="mt-2 text-black text-2xl"> {pickUpAndDrop}</p>
        </div>
      </div>
    </>
  );
};

export default IconWithDetails;
