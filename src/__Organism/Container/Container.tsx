import Header from "../../__Molecule/Header/Header";
import EachJob from "../../__Molecule/EachJob/EachJob";
import Data from "../../data.json";
import { useEffect, useState } from "react";
import ChoosedBtn from "../../__Atom/ChoosedBtn/ChoosedBtn";

function Container() {
  const [type, setType] = useState<string[]>(() => {
    const saved = localStorage.getItem("selectedTypes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("selectedTypes", JSON.stringify(type));
  }, [type]);

  function Remove(value: string) {
    setType((prev) => prev.filter((item) => item !== value));
  }

  return (
    <>
      <div className="w-[100%] h-screen overflow-y-auto bg-[#effafa] pb-[50px]  ">
        <Header />
        {type.length > 0 && (
          <div className="w-full h-auto  flex justify-center pl-[10px] pr-[10px]">
            <div className="flex flex-wrap drop-shadow-xl max-w-[1110px] min-h-[71px] pl-[20px] pb-[15px] pt-[15px] w-full h-auto items-center z-100 mt-[-30px] rounded-[5px]  bg-white gap-[8px]  ">
              {type.map((choosed, key) => (
                <ChoosedBtn
                  key={key}
                  onClick={() => Remove(choosed)}
                  btnText={choosed}
                />
              ))}
            </div>
          </div>
        )}
        <div className="flex gap-[30px] max-sm:gap-[40px]  flex-col mt-[50px] pl-[10px] pr-[10px]">
          {Data.filter(
            (Information) =>
              type.length === 0 ||
              type.every(
                (t) =>
                  Information.role === t ||
                  Information.level === t ||
                  Information.languages.includes(t) ||
                  (Information.tools && Information.tools.includes(t))
              )
          ).map((Information, key) => (
            <EachJob setType={setType} key={key} Information={Information} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Container;
