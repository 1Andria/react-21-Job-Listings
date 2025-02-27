import Button from "../../__Atom/Button/Button";

type JobsProps = {
  Information: object & JobInfo;
};

type JobInfo = {
  logo: string;
  company: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: Array<String>;
  tools: Array<String>;
};

function EachJob({ Information }: JobsProps) {
  return (
    <>
      <div className="max-w-[1110px] max-td:flex-col  max-td:h-auto max-td:max-w-[500px] max-td:gap-[20px] max-td:p-[20px] pl-[20px] max-sm:items-start pr-[20px] justify-between w-full h-[152px] bg-white ml-auto mr-auto flex items-center">
        <div className=" max-sm:flex-col flex gap-[30px] relative">
          <img
            src={Information.logo}
            className="w-[88px] h-[88px] max-sm:w-[48px] top-[-50px] max-sm:absolute max-sm:h-[48px]"
            alt="logo"
          />
          <div className="flex flex-col gap-[5px]">
            <div className="flex gap-[10px] items-center">
              <h3 className="text-[#5CA5A5] text-[18px] mr-[7px]">
                {Information.company}
              </h3>
              {Information.new && (
                <div className="w-[51px] flex justify-center items-center h-[24px] rounded-[30px] bg-[#5CA5A5]">
                  <h1 className="text-white text-[14px]">NEW!</h1>
                </div>
              )}
              {Information.featured && (
                <div className="w-[79px] flex justify-center items-center h-[24px] rounded-[30px] bg-black">
                  <h1 className="text-white text-[14px]">FEATURED</h1>
                </div>
              )}
            </div>
            <h1 className="text=[#2B3939] cursor-pointer hover:text-[#5CA5A5] text-[22px]">
              {Information.position}
            </h1>
            <div className="flex gap-[10px] items-center max-td:text-[16px]">
              <h3 className="text-[#7C8F8F] text-[18px] ">
                {Information.postedAt}
              </h3>
              <div className="w-[4px] bg-[#B7C4C4] h-[4px] rounded-[50px] max-td:text-[16px]"></div>
              <h3 className="text-[#7C8F8F] text-[18px] ">
                {Information.contract}
              </h3>
              <div className="w-[4px] bg-[#B7C4C4] h-[4px] rounded-[50px]"></div>
              <h3 className="text-[#7C8F8F] text-[18px] max-td:text-[16px] ">
                {Information.location}
              </h3>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full min-td:hidden bg-[#B7C4C4]"></div>
        <div className="flex gap-[20px] max-td:flex-wrap">
          <Button btnText={Information.role} />
          <Button btnText={Information.level} />
          {Information.languages.map((skill, key) => (
            <Button key={key} btnText={skill} />
          ))}
          {Information.tools &&
            Information.tools.map((tools, key) => (
              <Button btnText={tools} key={key} />
            ))}
        </div>
      </div>
    </>
  );
}

export default EachJob;
