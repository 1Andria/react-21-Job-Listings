import Header from "../../__Molecule/Header/Header";
import EachJob from "../../__Molecule/EachJob/EachJob";
import Data from "../../data.json";

function Container() {
  return (
    <>
      <div className="w-[100%] h-screen overflow-y-auto bg-[#effafa] pb-[50px]  ">
        <Header />
        <div className="flex gap-[30px] max-sm:gap-[40px]  flex-col mt-[80px] pl-[10px] pr-[10px]">
          {Data.map((Information, key) => (
            <EachJob key={key} Information={Information} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Container;
