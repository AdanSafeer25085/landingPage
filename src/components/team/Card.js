import React from "react";

const Card = ({ backgroundImage, profileImage, title, priceRange }) => {
  return (
    <div
      className="w-[304px] h-[377px] flex flex-col gap-[24px] bg-cover bg-center "
       // Make sure the URL path is correct
    >
      <div className="relative p-4 w-[304px] h-[296px] flex justify-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <img
          src={profileImage}
          alt="Profile"
          className="absolute bottom-4 left-4 rounded-full w-32 h-32 "
        />
      </div>
      <div className="w-[296px] h-[57px] ">
        <h2 className="h-[30px] text-[20px] leading-[30px] font-semibold">{title}</h2>
        <p className="text-[#666666] h-[27px] text-[18px] leading-[27px] font-normal">{priceRange}</p>
      </div>
    </div>
  );
};

export default Card;
