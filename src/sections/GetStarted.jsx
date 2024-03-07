import React from "react";
import arrow from "../../public/images/arrow.png";
import getStarted from "../../public/images/getStarted.png";

export default function GetStarted() {
  return (
    <div className="lg:absolute w-[90%] mt-6 mx-2 ml-5  lg:mx-0 lg:right-[3vw] lg:top-[18vh] rounded-md gap-10 bg-[#0e52fc] flex flex-col justify-center items-center p-4 lg:w-[28vw] lg:h-[65vh] ">
      <div className="flex flex-col gap-4 text-[3vh] font-bold text-white justify-center items-center">
        <h1 className="">Get Started with KoinX</h1>
        <h1 className="">For Free</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-white text-center text-[14px]">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
        <img src={getStarted} alt="" className=" h-[30vh]" />
        <button className="bg-white rounded-md items-center justify-center p-1 flex gap-2 ">
          Get Started For Free <img src={arrow} alt="" className="h-[2vh]" />
        </button>
      </div>
    </div>
  );
}
