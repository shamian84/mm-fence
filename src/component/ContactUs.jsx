import contact from "../assets/contactus.jpg";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import location from "../assets/location.png";
const ContactUs = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:grid-cols-2 justify-center my-10 gap-10 lg:gap-16 px-4 lg:px-0">
        <div className="flex-1 ml-[100px]">
          <div className="flex justify-center lg:justify-start">
            <img src={contact} alt="contact logo" className="" />
          </div>
          <div className="text-center lg:text-left mt-4">
            <h1 className="text-3xl font-bold">Get in touch for any kind of</h1>
            <h3 className="text-3xl font-bold">help and informations</h3>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 mt-8 items-center lg:items-start">
            <div className="flex items-center gap-4">
              <img
                src={phone}
                alt="calls"
                className="rounded-full p-4 bg-blue-200"
              />
              <div>
                <h1 className="font-bold text-lg lg:text-xl">Call for help</h1>
                <h2 className="font-medium text-base lg:text-lg">
                  +91-9329807373
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={mail}
                alt="mails"
                className="rounded-full p-4 bg-blue-200"
              />
              <div>
                <h1 className="font-bold text-lg lg:text-xl">
                  Mail us for information
                </h1>
                <h2 className="font-medium text-base lg:text-lg">
                  mmweldmesh@gmail.com
                </h2>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <img
              src={location}
              alt="location"
              className="rounded-full p-4 bg-blue-200"
            />
            <div>
              <h1 className="font-bold text-lg lg:text-xl">
                Our head office address
              </h1>
              <h2 className="font-medium text-base lg:text-lg">
                61/3, Dumartarai, Airport Bypass,
              </h2>
              <h3 className="font-medium text-base lg:text-lg">
                N.H. 43, Raipur, CG 492015
              </h3>
            </div>
          </div>
        </div>

        <div className="flex-1 mt-8 lg:mt-0">
          <div className="max-w-md mx-auto p-6 bg-white">
            <p className="text-gray-500 mb-6 text-center lg:text-left">
              We’re glad to discuss your organisation’s situation. So please
              contact us via the details below, or enter your request.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
              />
              <textarea
                placeholder="Type your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
                rows="4"
              ></textarea>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-red-600 border-gray-300 rounded"
                />
                <label className="ml-2 text-sm text-gray-700">
                  I accept the{" "}
                  <a href="#" className="text-blue-500 underline">
                    Terms
                  </a>
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
