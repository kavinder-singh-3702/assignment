import Navbar from "./sections/nav";
import Team from "./sections/team";
import About from "./sections/about_bitcoin";
import Tokenomics from "./sections/tokenomics";

function App() {
  return (
    <>
      <div className="bg-gray-200 pb-10">
        <Navbar />
        <About />
        <Tokenomics />
        <Team />
      </div>
    </>
  );
}

export default App;
