import stick from "../assets/stick.png";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";
import photo4 from "../assets/photo4.png";
import photo5 from "../assets/photo5.png";
import photo6 from "../assets/photo6.png";
import Block from "./Block";

const data = [
  {
    photo: photo1,
    desc: "Different wire mesh fence types",
  },
  {
    photo: photo2,
    desc: "Various wire mesh fence categories",
  },
  {
    photo: photo3,
    desc: "Wire mesh processing variations",
  },
  {
    photo: photo4,
    desc: "Various wire mesh lathe machine models",
  },
  {
    photo: photo5,
    desc: "Types of wire mesh agricultural fences",
  },
  {
    photo: photo6,
    desc: "Different wire mesh CNC machine types",
  },
];

function Categories() {
  return (
    <div>
      <div>
        <div className="flex items-center bg-[#EAECF4] w-[140px] h-[40px] rounded-2xl ml-[100px]">
          <img src={stick} alt="magic stick" className="p-3" />
          <span className="text-[#254189] text-[18px]">Category</span>
        </div>
        <span className="text-[45px] font-bold text-black mr-3 ml-[100px]">
          We offer many
        </span>
        <span className="text-[45px] font-bold text-[#E10017]">
          Categories.
        </span>
        <br />
        <span className="text-[#222222] text-[20px] ml-[100px]">
          We specialize in the Services.
        </span>
      </div>

      <div className="flex items-center gap-8 mx-[100px] mt-[80px] mb-[60px]">
        {data?.map((item) => {
          return <Block photo={item.photo} desc={item.desc} />;
        })}
      </div>
    </div>
  );
}
export default Categories;
