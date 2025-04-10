import Card from './Card';
function Team() {
    const cardsData = [
        {
          backgroundImage: '/images/Image-Wrapper.png',
          profileImage: '/images/Worker-Image.png',
          title: 'Software Developers',
          priceRange: '$1,000 - $2,500 /month (avg.)'
        },
        {
          backgroundImage: '/images/Image-Wrapper2.png',
          profileImage: '/images/Worker-Image2.png',
          title: 'Designers',
          priceRange: '$800 - $1,800 /month (avg.)'
        },
        {
          backgroundImage: '/images/Image-Wrapper3.png',
          profileImage: '/images/Worker-Image3.png',
          title: 'Marketing Experts',
          priceRange: '$900 - $2,000 /month (avg.)'
        },
        {
            backgroundImage: '/images/Image-Wrapper4.png',
            profileImage: '/images/Worker-Image4.png',
            title: 'Marketing Experts',
            priceRange: '$900 - $2,000 /month (avg.)'
          }
      ];
      const cardsData2 = [
        {
          backgroundImage: '/images/Image-Wrapper5.png',
          profileImage: '/images/Worker-Image5.png',
          title: 'Adan',
          priceRange: '$1,000 - $2,500 /month (avg.)'
        },
        {
          backgroundImage: '/images/Image-Wrapper6.png',
          profileImage: '/images/Worker-Image6.png',
          title: 'Designers',
          priceRange: '$800 - $1,800 /month (avg.)'
        },
        {
          backgroundImage: '/images/Image-Wrapper7.png',
          profileImage: '/images/Worker-Image7.png',
          title: 'Marketing Experts',
          priceRange: '$900 - $2,000 /month (avg.)'
        },
        {
            backgroundImage: '/images/Image-Wrapper8.png',
            profileImage: '/images/Worker-Image8.png',
            title: 'Marketing Experts',
            priceRange: '$900 - $2,000 /month (avg.)'
          }
      ];

  return (
    <div className="w-[1440px] m-auto h-[1326px] py-[112px] px-[64px] flex flex-col gap-[80px]">
      <div className="w-[768px] h-[204px] flex flex-col gap-[16px]">
        <div className="w-[47px] h-[21px] font-semibold text-[14px] leading-[21px] text-[#666666]">
          Roles
        </div>
        <div className="w-[768px] h-[167px] flex flex-col gap-[24px]">
          <div className="w-[768px] h-[116px] font-semibold text-[48px] leading-[57.6px] text-[#000000]">
            High-caliber talent{" "}
            <span className="text-[#666666]">for essential roles</span>
          </div>
          <div className="w-[768px] h-[27px] font-normal text-[18px] leading-[27px] text-[#666666]">
            Here are several examples of the job roles we can fill with amazing
            remote workers.
          </div>
        </div>
      </div>

      <div className="w-[1312px] h-[818px] flex flex-col gap-[96px]">
        <div className="w-[1312px] h-[377px] flex  ">
          <div className="flex flex-wrap gap-[32px]">
            {cardsData.map((card, index) => (
              <Card
                key={index}
                backgroundImage={card.backgroundImage}
                profileImage={card.profileImage}
                title={card.title}
                priceRange={card.priceRange}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-[1312px] h-[818px] flex flex-col gap-[96px]">
        <div className="w-[1312px] h-[377px] flex  ">
          <div className="flex flex-wrap gap-[32px]">
            {cardsData2.map((card, index) => (
              <Card
                key={index}
                backgroundImage={card.backgroundImage}
                profileImage={card.profileImage}
                title={card.title}
                priceRange={card.priceRange}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Team;
