"use client";
import React, { useState } from 'react';
import Slide from './slide';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "“We were blown away by how quickly we were matched with qualified candidates. Our Marketing Assistant was an obvious choice and we’ve been incredibly happy working with her. One of the best investments we’ve made in our business.”",
      description: "Corey Haines",
      additionalDescription: "Cofounder, Conversion Factory",
      logo: "/Testimonial/conversion-factory-logo-white-rgb 1.png",
      additionalImage: "/Testimonial/Avatar Image.png" // Update with your image path
    },
    {
      title: "“The talent pool from Latin Remote Workers is top-notch. Our new remote hires exceeded all expectations.”",
      description: "Constantine Yaremtso",
      additionalDescription: "CEO, Self Inspection",
      logo: "/Testimonial/self inspection logo.png",
      additionalImage: "/Testimonial/Avatar Image 3.png" // Update with your image path
    },
    {
      title: "“Latin Remote Workers made hiring remote talent effortless. The team they helped us hire has been a game-changer.”",
      description: "Brian Nelson",
      additionalDescription: "President, South Coast Commercial",
      logo: "/Testimonial/Untitled.png",
      additionalImage: "/Testimonial/AvatarImage2.png" // Update with your image path
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : slides.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < slides.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className='w-[1440px] m-auto h-[676px] relative flex flex-col items-center justify-center' id="testimonials">
      <div className="w-full max-w-[1312px] flex items-center justify-between gap-[48px]">
        <button 
          onClick={handlePrevious} 
          className="w-12 h-12 rounded-full bg-transparent hover:bg-gray-300 flex items-center justify-center transition-colors flex-shrink-0"
          style={{ borderRadius: "50%" }}
        >
          <img className='w-6 h-6' src='/Testimonial/Icon1.png' alt="Previous Slide Icon" />
        </button>
        
        <div className="relative w-[768px] h-[390px] overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 h-full">
                <Slide
                  title={slide.title}
                  description={slide.description}
                  additionalDescription={slide.additionalDescription}
                  image={slide.logo}
                  additionalImage={slide.additionalImage}
                />
              </div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={handleNext} 
          className="w-12 h-12 rounded-full bg-transparent hover:bg-gray-300 flex items-center justify-center transition-colors flex-shrink-0"
          style={{ borderRadius: "50%" }}
        >
          <img className='w-6 h-6' src='/Testimonial/Icon.png' alt="Next Slide Icon" />
        </button>
      </div>
      
      {/* Dots indicator */}
      <div className="mt-8 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-black' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
