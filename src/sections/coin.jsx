import React from "react";
import useCoinGeckoApi from "../hooks/useCoinGeckoApi";
import TradingViewWidget from "../widget/tradingViewWidget";

export default function Coin() {
  const apiUrl =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true";
  const { data, loading, error } = useCoinGeckoApi(apiUrl);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  const usdChange = data.bitcoin.usd_24h_change;

  return (
    <div className="h-auto rounded-md w-[60%] ml-14 bg-white py-4 px-6 mt-10 mb-6">
      <div className="flex gap-4">
        <img src alt="Bitcoin" />
        <h3 className="font-semibold text-l mb-2">Bitcoin</h3>
        <h1>${data.bitcoin.usd}</h1>
        <h1>₹{data.bitcoin.inr}</h1>
        <p> {usdChange.toFixed(2)}%</p>
      </div>
      <div>
        <TradingViewWidget />
      </div>

      <hr className="w-full h-[2px] bg-gray-300 my-4" />
    </div>
  );
}
