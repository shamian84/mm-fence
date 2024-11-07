import facebookIcon from "../assets/facebookIcon.jpg";
import instagramIcon from "../assets/instagramIcon.jpg";
import linkedinIcon from "../assets/linkedin.jpg";
import mapImage from "../assets/map.jpg";
import logo from "../assets/logo.png";
import logo3 from "../assets/logo3.jpg";

// import { HiOutlineSupport } from "react-icons/hi";
import callchat from "../assets/phone.png";
import locations from "../assets/location.png";

const Footer = () => {
  return (
    <footer
      className="footer bg-cover bg-center p-8"
      style={{ backgroundImage: `url(${logo3})` }}
    >
      <div className="text-white py-10 ">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img src={logo} alt="Logo" className="" />

            <p className="text-gray-400 mt-2">
              We work with a passion for taking on challenges and creating new
              ones in the industry sector.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" aria-label="Facebook">
                <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold">Official Info</h3>
            <div className="mt-4 space-y-2">
              <p className="text-gray-400 flex items-center gap-4 justify-center md:justify-start">
                {/* <HiOutlineSupport /> */}
                <span> Help & Support </span>
              </p>
              <p className="text-gray-400 flex items-center justify-center md:justify-start">
                <span className="mr-2">
                  <img src={callchat} alt="callchat logo" className="" />
                </span>{" "}
                +91-9329807373
              </p>
              <p className="text-gray-400 flex items-center justify-center md:justify-start">
                <span className="mr-2">
                  <img src={locations} alt="locations logo" className="" />
                </span>{" "}
                61/3, Dumartarai, Airport Bypass, N.H. 43, Raipur, CG 492015
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="flex justify-center md:justify-end">
            <img
              src={mapImage}
              alt="Map"
              className="w-full h-auto max-w-xs rounded-lg"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 mt-10">
          ©2024 Copyright MM Fence.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
