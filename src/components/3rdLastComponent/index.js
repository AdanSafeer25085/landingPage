import useButtonAction from "../../hooks/useButtonAction";

function Component(){
    const { handleStartHiring } = useButtonAction();
    
    return(
        <div className="w-[1440px] h-[479px] py-[112px] px-[64px] gap-[80px] text-[#444444] m-auto" style={{ backgroundImage: `url('/images/29.png')` }} >
            <div className="w-[768px] h-[255px] felx flex-col gap-[24px] m-auto">
                <div  className="w-[768px] h-[167px] flex flex-col gap-[24px]">
                    <h2 className="h-[116px] font-semibold text-[48px] leading-[57.5px] text-center font-[sans-serif] text-[#000000]">Ready to explore hiring remote LatAm talent?</h2>
                    <p className="h-[27px] font-normal text-[18px] leading-[27px] text-center font-[sans-serif] text-[#000000]">Find out if Latin Remote Workers is a good fit for you in just 30 minutes.</p>
                </div>
                <div className="w-[113px] h-[64px] pt-[16px] gap-[16px] m-auto">
                <div className="w-[113px] h-[48px] text-center flex justify-center items-center">
                    <button 
                        className="rounded-[12px] py-[12px] px-[24px] text-[13px] font-normal leading text-center font-[sans-serif] bg-[#000000] text-white transition-all hover:bg-[#2a2a2a] hover:scale-105"
                        onClick={handleStartHiring}
                    >
                        Start hiring
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
}
export default Component;