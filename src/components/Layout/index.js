import './index.css'

function Container() {
  return (
    <div
      className="w-[1440px] h-[840px] m-[auto] gap-[80px] bg-[#F7F7F7]"
      style={{ padding: "112px 64px" }}
      id="how-it-works"
    >
      <div className="w-[1312px] h-[620px] flex gap-[80px]">
        <div className="w-[616px] h-[620px]">
          <div className="w-[616px] h-[211px] flex flex-col gap-[16px]">
            <div className="w-[616px] h-[21px] font-semibold text-[14px] leading-[21px] text-[#666666]">
              OUR PROMISE
            </div>
            <div className="w-[616px] h-[174px] flex flex-col">
  <h1 className="text-[48px] leading-[57.6px] font-semibold">
    Hire faster and pay less
  </h1>
  <span className="text-[48px] font-semibold leading-[57.6px] text-left text-[#666666]">
    without compromising on talent quality
  </span>
</div>

          </div>
        </div>
        <div
          className="w-[616px] h-[620px] gap-[16px]"style={{ padding: "400px 0px 0px 0px" }}>
          <div
            className="w-[616px] h-[220px] gap-[16px]"
            style={{ padding: "0px 46px 0px 46px" }}
          >
            <div className="w-[524px] h-[220px] flex gap-[24px]">
              <div className="w-[250px] h-[220px] flex flex-col gap-[16px]">
              <div className="w-[250px] h-[28px] font-semibold text-[20px] leading-[28px]">Before</div>
              <li className="w-[250px] h-[176px] flex flex-col gap-[16px] list-none">
                <ol className="custom-bullet3 w-[250px] h-[48px] " style={{margin:"0px"}}><span className="w-[222px] gap-[16px] text-[16px] leading-[24px] font-normal text-[#666666]">Spend months recruiting, interviewing, and vetting</span></ol>
                <ol className="custom-bullet3 w-[250px] h-[48px] " style={{margin:"0px"}}><span className="w-[222px] gap-[16px] text-[16px] leading-[24px] font-normal text-[#666666]">Pay high local salaries + employment overhead costs</span></ol>
                <ol className="custom-bullet3 w-[250px] h-[48px] " style={{margin:"0px"}}><span className="w-[222px] gap-[16px] text-[16px] leading-[24px] font-normal text-[#666666]">Waste time with unqualified workers</span></ol>
              </li>
              </div>
              <div className="w-[250px] h-[220px] flex flex-col gap-[16px]">
              <div className="w-[250px] h-[28px] font-semibold text-[20px] leading-[28px]">Before</div>
              <li className="w-[250px] h-[176px] flex flex-col gap-[16px] list-none">
                <ol className="custom-bullet2 w-[250px] h-[48px] " style={{margin:"0px"}}><span className="w-[222px] gap-[16px] text-[16px] leading-[24px] font-normal ">Spend months recruiting, interviewing, and vetting</span></ol>
                <ol className="custom-bullet2 w-[250px] h-[48px] " style={{margin:"0px"}}><span className="w-[222px] gap-[16px] text-[16px] leading-[24px] font-normal ">Pay high local salaries + employment overhead costs</span></ol>
                <ol className="custom-bullet2 w-[250px] h-[48px] " style={{margin:"0px"}}><span className="w-[222px] gap-[16px] text-[16px] leading-[24px] font-normal ">Waste time with unqualified workers</span></ol>
              </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
