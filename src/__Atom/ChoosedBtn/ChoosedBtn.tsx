type ChdBtn = {
  btnText: String;
  onClick: () => void;
};
function ChoosedBtn({ btnText, onClick }: ChdBtn) {
  return (
    <>
      <button className="cursor-pointer w-auto pl-[10px] gap-[10px] h-[32px] bg-[#eff6f6]    flex justify-center  items-center">
        <h1 className="text-[16px] text-[#5Ca5a5] ">{btnText}</h1>
        <div
          onClick={onClick}
          className="h-full w-[32px] bg-[#5ca5a5] hover:bg-black flex justify-center items-center"
        >
          <h1 className="text-[24px] text-white">X</h1>
        </div>
      </button>
    </>
  );
}

export default ChoosedBtn;
