import OptimizedImage from "../OptimizedImage";
import useButtonAction from "../../hooks/useButtonAction";

function Salery() {
  const { handleStartHiring } = useButtonAction();

  return (
    <div className="w-[1440px] h-[871px] m-auto px-[64px] py-[112px] flex flex-col gap-[80px] bg-[#FFFFFF]" id="pricing">
      <div className="w-[768px] h-[95px] m-auto flex flex-col items-center  gap-[16px]">
        <div className="w-[57px] h-[21px] font-semibold text-[14px] leading-[21px] text-center text-[#666666]">
          Pricing
        </div>
        <h2 className="w-[768px] h-[58px] font-semibold text-[48px] leading-[57.6px] text-center text-[#000000]">
          Save up to 70% on salaries
        </h2>
      </div>
      <div className="w-[1312px] h-[472px] m-auto flex  gap-[32px]">
        <div className="w-[861px] h-[472px] flex m-auto rounded-[12px] bg-[#F7F7F7]">
          <OptimizedImage
            className="w-[430.5px] h-[472px] rounded-l-[12px]"
            src="/landing-page/Placeholder Image.png"
            alt="Pricing illustration"
            width={430}
            height={472}
          />
          <div className="w-[430.5px] h-[472px] flex flex-col gap-[16px] p-[32px]">
            <div className="w-[366.5px] h-[66px] flex flex-col gap-[8px]">
              <div className="w-[366.5px] h-[24px] text-[16px] font-semibold leading-[24px] text-[#666666]">
                Price
              </div>
              <div className="w-[366.5px] h-[34px] text-[24px] font-semibold leading-[33.6px] text-[#000000]">
                20% of First-Year Salary
              </div>
            </div>
            <div className="w-[366.5px] h-[246px] flex flex-col gap-[12px]">
              <div className="w-[366.5px] h-[50px] flex flex-col gap-[2px]">
                <div className="h-[24px] font-semibold text-[16px] leading-[24px] font-[sans-serif] text-[#000000]">
                  One-Time Placement Fee
                </div>
                <div className="h-[24px] font-normal text-[16px] leading-[24px] font-[sans-serif] text-[#666666]">
                  No hidden fees or ongoing charges.
                </div>
              </div>
              
              <div className="w-[366.5px] h-[74px] flex flex-col gap-[2px]">
                <div className="h-[24px] font-semibold text-[16px] leading-[24px] font-[sans-serif] text-[#000000]">
                Risk-Free
                </div>
                <div className="h-[48px] font-normal text-[16px] leading-[24px] font-[sans-serif] text-[#666666]">
                If you don't make a hire, you don't <br /> pay anything.
                </div>
              </div>

              <div className="w-[366.5px] h-[98px] flex flex-col gap-[2px]">
                <div className="h-[24px] font-semibold text-[16px] leading-[24px] font-[sans-serif] text-[#000000]">
                Full Transparency
                </div>
                <div className="h-[72px] font-normal text-[16px] leading-[24px] font-[sans-serif] text-[#666666]">
                You receive a detailed breakdown of costs <br /> upfront, so you know exactly what you're <br /> paying for with no surprises.
                </div>
              </div>
            </div>
            <div className="w-[366.5px] h-[64px] pr-[16px] gap-[24px] flex items-end">
                <button 
                  className="w-[133px] h-[48px] rounded-[12px] border-[1px solid #000000] bg-[#000000] py-[12px] px-[24px] transition-all hover:bg-[#2a2a2a] hover:scale-105"
                  onClick={handleStartHiring}
                >
                    <p className="leading-[24px] text-[16px] font-normal font-[sans-serif] h-[24px] w-[85px] text-[#FFFFFF]">Start hiring</p>
                </button>
            </div>
          </div>
        </div>
        <div className="w-[419px] h-[472px] rounded-[12px] text-[#FFFFFF]">
        <OptimizedImage
            className="w-[430.5px] h-[472px] rounded-[12px]"
            src="/Testimonial/Layout/370/Card.png"
            alt="Testimonial card"
            width={430}
            height={472}
          />
        </div>
      </div>
    </div>
  );
}
export default Salery;
