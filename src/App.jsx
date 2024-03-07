import Navbar from "./sections/nav";
import Team from "./sections/team";
import About from "./sections/about_bitcoin";
import Tokenomics from "./sections/tokenomics";
import Coin from "./sections/coin";
import TrendingCoins from "./sections/TrendingCoins";
import You_may_also_like from "./sections/You_may_also_like";
import GetStarted from "./sections/GetStarted";
import Performance from "./sections/Performance";

function App() {
  return (
    <>
      <div className="bg-gray-200 pb-10">
        <Navbar />
        <Coin />
        <Performance />
        <About />
        <Tokenomics />
        <Team />
        <You_may_also_like heading={"You May Also Like"} />
        <You_may_also_like heading={"Trending Coins"} />
        <GetStarted />
        <TrendingCoins />
      </div>
    </>
  );
}

export default App;
