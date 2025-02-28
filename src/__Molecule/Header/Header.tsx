import Background from "../../assets/bg.png";
function Header() {
  return (
    <>
      <div className="w-full h-[156px] ">
        <img
          className=" h-full w-full object-cover "
          src={Background}
          alt="img"
        />
      </div>
    </>
  );
}

export default Header;
