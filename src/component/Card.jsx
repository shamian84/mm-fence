import frame from "../assets/frame.png";
import bullet from "../assets/bullet.png";

function Card() {
  return (
    <div className="w-[630px] h-[475px]">
      <div className="flex items-center bg-[#FFFFFF1A] w-[240px] h-[40px] rounded-3xl border border-[#3D3D3D] shadow-md">
        <div className="ml-6 my-2 w-6 h-6">
          <img src={frame} alt="star icon" height={26} width={26} />
        </div>
        <span className="text-white ml-[6px] mt-2 mr-[22px] mb-2 text-[20px] hover:underline">
          Ek Click Deal Sahi
        </span>
      </div>
      <div>
        <span
          className="text-white
         text-[52px]"
        >
          Leading Wire Mesh Manufactures In India
        </span>
      </div>

      <div className="mt-6 mb-8">
        <div className="flex items-center gap-8 mb-3">
          <div className="flex items-center w-[288px] h-[26px] ">
            <div>
              <img src={bullet} alt="bullet" />
            </div>
            <span className="text-white ml-2">Expand your reach</span>
          </div>
          <div className="flex items-center w-[288px] h-[26px] ">
            <div>
              <img src={bullet} alt="bullet" />
            </div>
            <span className="text-white ml-2">Boost your income</span>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center w-[288px] h-[26px] ">
            <div>
              <img src={bullet} alt="bullet" />
            </div>
            <span className="text-white ml-2">Become an ed-tech leader</span>
          </div>
          <div className="flex items-center ">
            <div>
              <img src={bullet} alt="bullet" />
            </div>
            <span className="text-white ml-2">Effortless management</span>
          </div>
        </div>
      </div>
      <div>
        <button className="bg-[#E10017] text-white px-4 py-2 rounded-md">
          Request For CallBack
        </button>
      </div>
      <div className="flex gap-10 mt-8">
        <div>
          <div className="text-white text-[36px] font-bold">30k+</div>
          <span className="text-white text-[18px]">Short heading goes</span>
        </div>
        <div>
          <div className="text-white text-[36px] font-bold">20+</div>
          <span className="text-white text-[18px]">Short heading goes</span>
        </div>
        <div>
          <div className="text-white text-[36px] font-bold">5M</div>
          <span className="text-white text-[18px]">Short heading goes</span>
        </div>
      </div>
    </div>
  );
}
export default Card;
