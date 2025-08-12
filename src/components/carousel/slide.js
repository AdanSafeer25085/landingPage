
import React from 'react';
import OptimizedImage from '../OptimizedImage';
import './slide.css'; // Import CSS specific to Slide component

function Slide({ title, description, image, additionalImage, additionalDescription , style }) {
  return (
    <div className="slide transition-all duration-[1s] ease-in-out py-4"  style={{display:"flex",flexDirection:"column" , alignItems:"center",borderWidth:"0.5px", borderStyle:"solid", borderImage:"linear-gradient( red,orange,yellow,green,blue,indigo,violet) 1"}}>
      <OptimizedImage 
        className='image1' 
        src={image} 
        alt={title} 
        width={158} 
        height={56}
        style={{width:"158px" , height:"56px"}} 
      />
      <h2 className='h-[136px] w-[768px] m-[auto] flex items-center text-[24px] font-semibold font-[sans-serif]'>{title}</h2>
      <div className='flex flex-col items-center'>
      {additionalImage && (
        <OptimizedImage 
          src={additionalImage} 
          alt="Additional" 
          width={56}
          height={56}
          style={{width:"56px" , height:"56px"}} 
        />
      )}
      <p className=' font-[sans-serif] font-bold'>{description}</p>
      <p className='text-[#666666] font-[sans-serif]'>{additionalDescription}</p>
      </div>
    </div>
  );
}

export default Slide;

