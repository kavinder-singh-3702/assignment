import React from "react";
import useCoinGeckoApi from "../hooks/useCoinGeckoApi";

export default function TrendingCoins() {
  const apiUrl = " https://api.coingecko.com/api/v3/search/trending";
  const { data, loading, error } = useCoinGeckoApi(apiUrl);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const coinsArray = data;
  const top3Coins = coinsArray.coins.slice(0, 3);

  return (
    <div className="h-auto rounded-md w-[30%] ml-14 bg-white py-6 px-6 mt-6 pb-12">
      <h2 className="font-semibold text-xl mb-8 ml-1">Trending Coins(24H)</h2>
      <ul className="flex flex-col gap-8">
        {top3Coins.map((coin, index) => (
          <li key={index}>
            <div className="flex items-center w-[25vw] justify-between">
              <div className="flex">
                <img
                  src={coin.item.small}
                  alt=""
                  className="rounded-[50%] w-[25px]"
                />
                <h1 className="ml-2">{coin.item.name}</h1>
                <h1 className="">({coin.item.symbol})</h1>
              </div>
              <div className="text-[10px] ">
                {coin.item.data.price_change_percentage_24h.aed > 0 ? (
                  <p className="text-green-700 bg-green-200 rounded-md p-1">
                    +{coin.item.data.price_change_percentage_24h.aed}%
                  </p>
                ) : (
                  <p className="text-red-700 bg-red-400 rounded-md p-1">
                    -{coin.item.data.price_change_percentage_24h.aed}%
                  </p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
