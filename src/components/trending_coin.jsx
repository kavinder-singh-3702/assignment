import React from "react";

export default function show_coins({
  logo,
  symbol,
  price,
  sparkline,
  price_change,
}) {
  let profit = price_change > 0;
  return (
    <div className="flex flex-col w-[18vw] border border-solid border-grey-200 rounded-md p-4 mb-4 ml-6 flex-1">
      <div className="flex gap-1  items-center">
        <img src={logo} alt="" className="rounded-[50%] w-[25px]" />
        <h1 className="text-[10px]">{symbol}</h1>
        <h1 className="text-[10px]">
          {profit ? (
            <p className="text-green-500 bg-green-100 rounded-md">
              +{price.slice(0, 5)}
            </p>
          ) : (
            <p className="text-red-700 bg-red-300 rounded-md">
              -{price.slice(0, 5)}
            </p>
          )}
        </h1>
      </div>
      <h1>{price}</h1>
      <img src={sparkline} alt="" className="w-[20vw]" />
    </div>
  );
}
