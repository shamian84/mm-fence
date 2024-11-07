import Navbar from "./Navbar";
import Card from "./Card";
import wire from "../assets/wire.png";

function Hero() {
  return (
    <div className="herobg py-[100px]">
      {/* <Navbar /> */}
      <div className="w-full h-full py-[70px] relative z-10">
        {/* <img
          src={overlay}
          alt="herobackground"
          className="top-0 left-0 object-cover w-full h-full  "
        /> */}
        <div className="flex items-center justify-between w-[1320px] h-[590px] mx-[100px]">
          <div className="w-[610px] h-[475px]">
            <Card />
          </div>
          <div className="bg-[#FFFFFF1A]   backdrop-blur-lg flex items-center justify-center  rounded-3xl shadow-xl w-[600px] h-[460px]">
            <img src={wire} alt="wire" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
