import stick from "../assets/stick.png";
import Product from "./Product";
import product1 from "../assets/products/product1.png";
import product2 from "../assets/products/product2.png";
import product3 from "../assets/products/product3.png";
import product4 from "../assets/products/product4.png";
import product5 from "../assets/products/product5.png";

const list = [
  {
    photo: product1,
  },
  {
    photo: product2,
  },
  {
    photo: product2,
  },
  {
    photo: product3,
  },

  {
    photo: product4,
  },
  {
    photo: product5,
  },
];

function FeaturedProduct() {
  return (
    <div className="bg-[#F4F5F9]">
      <div className="pt-[50px]">
        <div className="flex items-center bg-[#EAECF4] w-[200px] h-[40px] rounded-2xl ml-[100px]">
          <img src={stick} alt="magic stick" className="p-3" />
          <span className="text-[#254189] text-[18px]">Featured Product</span>
        </div>
        <span className="text-[45px] font-bold text-black mr-3 ml-[100px]">
          We offer many
        </span>
        <span className="text-[45px] font-bold text-[#E10017]">
          services to progress!
        </span>
        <br />
        <span className="text-[#222222] text-[20px] ml-[100px]">
          We specialize in the Services.
        </span>
      </div>

      <div className="grid grid-cols-3  pl-[100px] pr-[80px] mt-[80px] w-full">
        {list?.map((item) => {
          return <Product photo={item.photo} />;
        })}
      </div>
    </div>
  );
}
export default FeaturedProduct;
