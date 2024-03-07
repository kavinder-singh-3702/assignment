import useCoinGeckoApi from "../hooks/useCoinGeckoApi";
import TrendingCoin from "../components/trending_coin";

export default function YouMayAlsoLike({ heading }) {
  const apiUrl = "https://api.coingecko.com/api/v3/search/trending";
  const { data, loading, error } = useCoinGeckoApi(apiUrl);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  const coinsArray = data.coins || []; // Access the correct property from the API response
  const top8Coins = coinsArray.slice(0, 8);
  console.log(top8Coins);

  return (
    <div className="h-auto rounded-md w-[80%] ml-14 bg-white py-6 px-6 mt-6 pb-12">
      <h2 className="font-semibold text-xl mb-4 ml-5">{heading}</h2>
      <ul className="flex overflow-auto gap-1">
        {top8Coins.map((coin, index) => (
          <li key={index}>
            <TrendingCoin
              key={index}
              logo={coin.item.small}
              symbol={coin.item.symbol}
              price_change={coin.item.data.price_change_percentage_24h.aed}
              price={coin.item.data.price}
              sparkline={coin.item.data.sparkline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
