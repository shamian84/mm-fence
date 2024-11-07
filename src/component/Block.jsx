function Block({ photo, desc }) {
  return (
    <div className="w-[193px] h-[240px]">
      <div>
        <img src={photo} alt="Object" className="w-[193px] h-[200px]" />
      </div>
      <p className="text-[18px] text-[#222222] w-[193px] font-bold mt-3  truncate">
        {desc}
      </p>
    </div>
  );
}
export default Block;
