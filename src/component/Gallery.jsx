import pic1 from "../assets/gallery/pic1.png";
import pic2 from "../assets/gallery/pic2.png";
import pic7 from "../assets/gallery/pic4.png";
import pic4 from "../assets/gallery/pic5.png";
import pic5 from "../assets/gallery/pic6.png";
import pic6 from "../assets/gallery/pic7.png";
import overlay from "../assets/overlay.png";
import fr from "../assets/fr.png";

function Gallery() {
  return (
    <div>
      <div className="mt-[50px] mb-[80px]">
        <div className="flex items-center  bg-[#EAECF4] rounded-2xl  w-[150px] h-[40px] mx-auto pr-4">
          <div>
            <img src={fr} alt="gallery icon" className="p-4" />
          </div>
          <span className="text-[18px] align-middle text-[#254189]">
            Gallery
          </span>
        </div>
        <div className="text-center">
          <span className="text-[#222222] font-bold text-[45px] mr-2">
            Explore
          </span>
          <span className="text-[#E10017] font-bold text-[45px]">Our Work</span>
        </div>
      </div>
      <div className="flex gap-5  mx-auto w-[1390px]">
        <div>
          <img
            src={pic1}
            alt="photo"
            className="w-[450px] h-[430px]  rounded-md mb-8"
          />
          <img
            src={pic2}
            alt="photo"
            className="w-[450px] h-[430px] rounded-md mb-8"
          />
        </div>
        <div>
          <img
            src={overlay}
            alt="overlay"
            className="w-[450px] h-[250px] rounded-md mb-8"
          />
          <img
            src={pic4}
            alt="picture"
            className="w-[450px] h-[250px] rounded-md mb-8"
          />
          <img
            src={pic5}
            alt="picture"
            className="w-[450px] h-[430px] rounded-md mb-8"
          />
        </div>
        <div>
          <img
            src={pic6}
            alt="gallery"
            className="w-[450px] h-[430px] rounded-md mb-8"
          />
          <img
            src={pic7}
            alt="gallery"
            className="w-[450px] h-[430px] rounded-md mb-8"
          />
        </div>
      </div>
    </div>
  );
}
export default Gallery;
