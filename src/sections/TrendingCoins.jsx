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
    <div>
      <h1>Top 3 Cryptocurrencies</h1>
      <ul>
        {top3Coins.map((coin, index) => (
          <li key={index}>
            <img src alt="" className />
            {index + 1}. {coin.item.name}
            <div>
              {coin.item.data.price_change_percentage_24h.aed.toFixed(2)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
