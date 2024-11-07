import video from "../assets/video.png";
import creative from "../assets/creative.png";

function Video() {
  return (
    <div>
      <div className="flex items-center  bg-[#EAECF4] rounded-2xl w-[200px] h-[40px] mx-auto pr-4">
        <div>
          <img src={video} alt="video icon" className="p-4" />
        </div>
        <span className="text-[18px] align-middle text-[#254189]">
          Company Video
        </span>
      </div>
      <div className="text-center">
        <span className="text-[#222222] font-bold text-[45px] mr-2">
          We Provide a Wide Range of
        </span>
        <span className="text-[#E10017] font-bold text-[45px]">
          Services to Advance!
        </span>
      </div>
      <div className="mx-auto my-16 w-[1170px] h-[650px]">
        <img src={creative} alt="video" className="w-[1170px] h-[650px]" />
      </div>
    </div>
  );
}
export default Video;
