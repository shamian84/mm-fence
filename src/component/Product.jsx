function Product({ photo }) {
  return (
    <div className="w-[390px] h-[490px] border border-[#BEC6DC] rounded-2xl mb-8">
      <div className="w-[390px] h-[420px] ">
        <img src={photo} alt="product" className="w-[390px] h-[420px]" />
      </div>
      <div className="flex items-center mb-4 ">
        <span className="text-[#254189] text-[20px ] font-bold mx-3">
          Chain Link
        </span>
        <button className="text-[#006CB5] border border-[#80B6DA] rounded-xl font-bold py-2 px-5 mt-3 ml-[140px] ">
          Get a Quota
        </button>
      </div>
    </div>
  );
}
export default Product;
