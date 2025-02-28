type BtnText = {
  btnText: String;
  onClick?: () => void;
};
function Button({ btnText, onClick }: BtnText) {
  return (
    <>
      <button
        onClick={onClick}
        className="cursor-pointer w-auto pl-[10px] pr-[10px] h-[32px] hover:bg-[#5ca5a5] bg-[#eff6f6] flex justify-center items-center"
      >
        <h1 className="text-[16px] w-full h-full text-[#5CA5A5] hover:text-white">
          {btnText}
        </h1>
      </button>
    </>
  );
}

export default Button;
