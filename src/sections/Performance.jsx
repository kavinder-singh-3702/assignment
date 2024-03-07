import React from "react";
import Fundamental from "../components/fundamental";

export default function Performance() {
  const gradientStyle = {
    width: "60%",
    height: "5px",
    background: "linear-gradient(to right, red, orange, green)",
  };
  return (
    <div className="h-auto rounded-md w-[90%] lg:w-[60%] mx-2 ml-4 lg:ml-14 bg-white py-6 px-2 lg:p-6 mt-6 pb-12 ">
      <h2 className="font-semibold text-3xl mb-4">Performance</h2>
      <div className="flex flex-col gap-8 mb-12">
        <div className="flex items-center gap-12">
          <div className="flex flex-col gap-4 ">
            <p>Today's Low</p>
            <p className="font-semibold">46,930.22</p>
          </div>
          <div style={gradientStyle}></div>
          <div className="flex flex-col gap-4">
            <p>Today's high</p>
            <p className="font-semibold">49,343.83</p>
          </div>
        </div>
        <div className="flex items-center  gap-12">
          <div className="flex flex-col gap-4 lg:mr-7">
            <p>52W Low</p>
            <p className="font-semibold">16,930.22</p>
          </div>
          <div className="h-[5px]" style={gradientStyle}></div>
          <div className="flex flex-col gap-4">
            <p>52W high</p>
            <p className="font-semibold">49,743.83</p>
          </div>
        </div>
      </div>

      {/* fundamentals */}
      <h1 className="lg:font-semibold lg:text-3xl text-2xl mb-8">
        Fundamentals
      </h1>
      <div className="flex flex-col lg:flex-row gap-10 flex-1 justify-between mx-2 mb-8">
        <ul className="flex flex-col gap-6">
          <li>
            {" "}
            <Fundamental heading={"Bitcoin Price"} value={"$16,815.46"} />
          </li>
          <li>
            <Fundamental
              heading={"24h Low / 24h high"}
              value={"$16,382.07/16,874.12"}
            />
          </li>
          <li>
            {" "}
            <Fundamental
              heading={"7d Low / 7d high"}
              value={"$16,382.07/16,874.12"}
            />
          </li>
          <li>
            <Fundamental heading={"Trading Volume"} value={"$23,249,202,782"} />
          </li>
          <li>
            {" "}
            <Fundamental heading={"Market Cap Rank"} value={"#1"} />
          </li>
        </ul>
        <ul className="flex flex-col gap-6">
          <li>
            <Fundamental heading={"Market Cap"} value={"$323,507,290,047"} />
          </li>
          <li>
            <Fundamental heading={"Market Cap Dominance"} value={"38.343%"} />
          </li>
          <li>
            <Fundamental heading={"Volume / Market Cap"} value={"0.078"} />
          </li>
          <li>
            <Fundamental heading={"All-Time High"} value={"$69,044.77"} />
          </li>
          <li>
            <Fundamental heading={"All-Time Low"} value={"$67.81"} />
          </li>
        </ul>
      </div>
    </div>
  );
}
