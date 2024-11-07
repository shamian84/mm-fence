import Categories from "./component/Categories";
import ContactUs from "./component/ContactUs";
import FeaturedProduct from "./component/FeaturedProduct";
import Footer from "./component/Footer";
import Gallery from "./component/Gallery";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import NavbarTop from "./component/NavbarTop";
import Partner from "./component/Partner";
import Testimonials from "./component/Testimonials";
import Video from "./component/Video";

function App() {
  return (
    <>
      {/* <div className="overflow-x-hidden"> */}
      <Navbar />
      <Hero />
      {/* </div> */}
      <Partner />
      <Video />
      <Categories />
      <FeaturedProduct />
      <Gallery />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
