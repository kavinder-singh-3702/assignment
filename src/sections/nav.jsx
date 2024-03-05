import LOGO from "../../public/images/logo.png";

export default function Navbar() {
  return (
    <>
      <ul className="flex items-center justify-between p-4 text-lg tracking-wider scroll-smooth border-b border-gray-300 shadow-sm">
        <div className="h-[50px] w-[100px] ml-6">
          <li className=" h-auto">
            <img src={LOGO} alt="logo" className="h-[65px] w-100px] " />
          </li>
        </div>
        <li className="flex content-between items-center gap-10 mr-6 text-[15px] font-semibold">
          <li className="h-auto  ">
            <a href="#" className="hover:underline decoration-2">
              Crypto Taxes
            </a>
          </li>
          <li className="h-auto ">
            <a href="#" className="scroll-pt-12 hover:underline decoration-2">
              Free Tools
            </a>
          </li>
          <li className="h-auto">
            <a href="#" className="hover:underline decoration-2">
              Resource Center
            </a>
          </li>
          <li className="h-auto items-center rounded-[10px] Actay-bold px-3 py-2 text-[white] bg-[blue]">
            <a href="" className="">
              {" "}
              Get Started
            </a>
          </li>
        </li>
      </ul>
    </>
  );
}
