import image from "../assets/Image.png";
import commas from "../assets/commas.png";
import dots from "../assets/dots.png";

function Testimonials() {
  return (
    <div className="bg-[#F4F5F9]">
      <div className="npmpt-[50px] mb-[80px] ">
        <div className="flex items-center  bg-white rounded-2xl  w-[150px] h-[40px] mx-auto pr-4">
          <span className="text-[18px] align-middle text-[#254189]">
            Testimonials
          </span>
        </div>
        <div className="text-center">
          <span className="text-[#222222] font-bold text-[45px] mr-2">
            We are very glad
          </span>
          <span className="text-[#E10017] font-bold text-[45px]">
            to get client review.
          </span>
        </div>
      </div>
      <div className="w-[900px] h-[450px] mx-auto">
        <div className="w-full">
          <img src={image} alt="photo" className="mx-auto" />
        </div>
        <div className="w-full">
          <img src={commas} alt="inverted-commas" className="mx-auto " />
        </div>
        <div>
          <span className="text-[#254189]">
            MM Industries Pvt Ltd has been instrumental in helping us achieve
            our project goals with their superior quality welded wire mesh
            products. Their expertise and dedication to customer satisfaction
            have made them our go-to supplier for all our reinforcement needs.
            We trust MM Industries to deliver excellence every time, and they
            never disappoint .....
          </span>
        </div>
        <div className="w-full">
          <span className=" text-[#677AAD] text-[18px] mx-[400px] hover:underline">
            READ MORE
          </span>
        </div>
        <div>
          <p className="text-[#222222] text-[20px] text-center mt-[20px]">
            Farhan Rio
          </p>
          <p className="text-[#656565] text-[16px] text-center ">
            Agent Manager
          </p>
        </div>
        <div className="w-full ">
          <img src={dots} alt="icon" className="mx-auto py-5" />
        </div>
      </div>
    </div>
  );
}
export default Testimonials;
