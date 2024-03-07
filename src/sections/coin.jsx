import useCoinGeckoApi from "../hooks/useCoinGeckoApi";
import TradingViewWidget from "../widget/tradingViewWidget";
import bitcoin from "../../public/images/bitcoin.png";

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
  console.log(data);

  return (
    <div className="h-auto  rounded-md w-[60%] ml-14 bg-white py-4 px-6 mt-10 mb-6">
      <div className="flex flex-col ">
        <div className="flex">
          <img
            src={bitcoin}
            alt="Bitcoin"
            className="h-[4.5vh] -translate-y-1"
          />
          <h3 className="font-semibold text-l mb-2">Bitcoin</h3>
        </div>
        <div className="mb-4">
          <div className="flex gap-6">
            {/* <h1>${data.bitcoin.usd}</h1> */}
            <h1 className="font-bold text-xl">$213421</h1>
            <span className="flex items-center gap-2">
              <p className="bg-green-200 text-green-600 p-1 rounded-md text-[10px]">
                {" "}
                {usdChange.toFixed(2)}%
              </p>
              <p className="text-[10px] text-grey-200">(24H)</p>
            </span>
          </div>
          <h1 className="text-[12px]">₹{data.bitcoin.inr}</h1>
        </div>
        <hr className="w-full h-[2px] bg-gray-300 mb-4" />
      </div>
      <div>
        <TradingViewWidget />
      </div>

      <hr className="w-full h-[2px] bg-gray-300 mb-" />
    </div>
  );
}
