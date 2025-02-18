import "./index.css";
// import image from '../images/2nd-image.png'

function Header() {
  return (
    <>
      <div className="w-[1440px] m-auto h-[900px] flex ]">
        <div className="flex flex-col gap-[16px] w-[720px] h-[900px] m-auto justify-center"style={{padding:"0px 80px 0px 64px"}}>
          <div className="w-[576px] h-[252px] flex flex-col gap-[24px]">
            <div className="font-Metropolis text-[48px] font-semibold w-[576px] h-[174px] leading-[57.6px]">
              Hire exceptional remote talent from Latin America
            </div>
            <div className="font-Metropolis text-[18px] font-extralight w-[576px] h-[54px] leading-[27px] text-[#666666]">
              The headhunter agency for U.S. companies to access top-tier
              workers from Latin American at unbeatable rates.
            </div>
          </div>
          <li className="w-[576px] h-[104px] gap-[16px] list-none">
            <ul>
              <li className="custom-bullet">Zero-risk replacement guarantee</li>
              <li className="custom-bullet">
                Save up to 70% compared to U.S. equivalents
              </li>
              <li className="custom-bullet">
                Qualified candidates ready to interview within 2 weeks
              </li>
            </ul>
          </li>
          <div className="w-[133px] h-[64px] pt-[16px] gap-[16px]">
            <button className="w-[133px] h-[48px] rounded-[12px] border-[1px] p-[12px, 24px, 12px, 24px] gap-[8px] bg-[#000000]">
              <span className="w-[85] h-[24px] text-[16px] leading-[24px] font-normal font-Metropolis text-white">
                Start hiring
              </span>
            </button>
          </div>
        </div>
        <div className="w-[720px] h-[900px] relative">
          <div className="w-[640px] h-[900px] your-class absolute top-[-0.22px] left-[80px]"></div>

          <img
            className="w-[324px] h-[486px] absolute top-[207px] rounded-[8px]"
            src="/images/2nd-img.png"
            alt="Description of the image"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
