import lt from "../assets/lt.png";
import lt2 from "../assets/lt2.png";
import lt3 from "../assets/lt3.png";
import lt4 from "../assets/lt4.png";
import lt5 from "../assets/lt5.png";

function Partner() {
  return (
    <div className="relative">
      <marquee>
        <div className="flex gap-20 mx-[117px] my-[50px]">
          <div>
            <img src={lt} alt="L&T" />
          </div>
          <div>
            <img src={lt2} alt="Corp" />
          </div>
          <div>
            <img src={lt3} alt="Hira" />
          </div>
          <div>
            <img src={lt4} alt="Jindal" />
          </div>
          <div>
            <img src={lt5} alt="Kalpa" />
          </div>
        </div>
      </marquee>
    </div>
  );
}
export default Partner;
