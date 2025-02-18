import React from "react";
import CompanyLogo from "../icons/company-logo";

const Footer = () => {
  return (
    <div className="w-[1440px] h-[484px] py-[80px] px-[64px] gap-[80px] m-auto flex flex-col bg-[#F7F7F7]">
      <div className="w-[1312px] h-[190px] gap-[64px] flex">
        <div className="w-[864px] h-[190px] flex flex-col gap-[32px]">
          <CompanyLogo />
          <div className="w-[864px] h-[137px] gap-[24px] flex flex-col">
            <div className="w-[864px] h-[46px] gap-[4px] flex flex-col">
              <div className="h-[21px] font-semibold text-[14px] leading-[21px] text-[#000000]">
                Address:
              </div>
              <div className="h-[21px] font-normal text-[14px] leading-[21px] text-#666666]">
                Level 1, 12 Sample St, Sydney NSW 2000
              </div>
            </div>
            <div className="w-[864px] h-[67px] gap-[4px] flex flex-col">
              <div className="h-[21px] font-semibold text-[14px] leading-[21px] text-[#000000]">Contact:</div>
              
              <div className="h-[42px]">
              <div className="h-[21px] font-normal text-[14px] leading-[21px] text-#666666]">
                <a className="underline" href="#">1800 123 4567</a>
              </div>
              <div className="h-[21px] font-normal text-[14px] leading-[21px] text-#666666]">
                <a className="underline" href="#">info@latinremoteworkers.com</a>
              </div>
            </div>
            </div>
            
          </div>
        </div>
        <div className="w-[384px] h-[168px] flex justify-end gap-[24px]">
        <div className="w-[180px] h-[168px] flex flex-col gap-[12px]">
          <div className="h-[24px] font-semibold text-[16px] leading-[24px] text-[#666666]">Pricing</div>
          <div className="h-[24px] font-semibold text-[16px] leading-[24px] text-[#666666]">How it Works</div>
          <div className="h-[24px] font-semibold text-[16px] leading-[24px] text-[#666666]">Roles</div>
          <div className="h-[24px] font-semibold text-[16px] leading-[24px] text-[#666666]">Our Promise</div>
          <div className="h-[24px] font-semibold text-[16px] leading-[24px] text-[#666666]">Start Hiring</div>
        </div>
        </div>

      </div>
      <div className="w-[1312px] h-[54px] flex flex-col gap-[32px]">
        <div className="w-[1312px] h-[1px] border-[1px] border-[#AAAAAA]"></div>
        <div className="w-[1312px] h-[21px] flex justify-between">
          <div className="w-[340px] h-[21px] font-normal text-[14px] leading-[21px] text-#666666]">© 2024 Latin Remote Workers. All rights reserved.</div>
          <div className="w-[231px] h-[21px] font-normal gap-[24px] flex">
          <div className="w-[93px] h-[21px] font-normal text-[14px] leading-[21px] text-#666666]">Privacy Policy</div>
          <div className="w-[114px] h-[21px] font-normal text-[14px] leading-[21px] text-#666666]">Terms of Service</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
