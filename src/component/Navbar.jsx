import logo from "../assets/logo.png";
import NavbarTop from "./NavbarTop";

function Navbar() {
  return (
    <>
      <NavbarTop />
      <nav className="absolute top-[56px] w-full z-10 flex items-center bg-transparent">
        <div className="w-[247px] ml-16 py-6">
          <img src={logo} alt="logo" />
        </div>

        <div className="flex items-center gap-8  ml-auto mr-16   ">
          <div className="">
            <ul className="flex items-center font-bold text-white gap-8 text-lg  ">
              <li className="hover:underline ">
                <a href="#">Home</a>
              </li>
              <li className="hover:underline">
                <a href="#">Service</a>
              </li>
              <li className="hover:underline">
                <a href="#">About Us</a>
              </li>
              <li className="hover:underline">
                <a href="#">Gallery</a>
              </li>
              <li className="hover:underline">
                <a href="#">PE-X</a>
              </li>
            </ul>
          </div>
          <div>
            <button className="bg-[#E10017] text-white px-4 py-2 rounded-md">
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
