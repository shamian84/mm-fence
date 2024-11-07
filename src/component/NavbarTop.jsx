import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import location from "../assets/location.png";
function NavbarTop() {
  return (
    <div className="bg-[#000000]">
      <div className="flex  justify-end py-4 mr-16 gap-8 ">
        <div className="flex items-center ">
          <div>
            <img src={phone} alt="phone" />
          </div>
          <span className="text-white ml-2 hover:underline">
            +91-9329807373
          </span>
        </div>

        <div className="flex items-center">
          <div>
            <img src={mail} alt="mail" />
          </div>
          <span className="text-white ml-2 hover:underline">
            mmweldmesh@gmail.com
          </span>
        </div>

        <div className="flex items-center ">
          <div>
            <img src={location} alt="location" />
          </div>
          <span className="text-white ml-2 hover:underline">
            61/3, Dumartarai, Raipur, CG
          </span>
        </div>
      </div>
    </div>
  );
}
export default NavbarTop;
