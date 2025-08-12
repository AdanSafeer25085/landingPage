"use client";
import React from 'react';
import Slide from './slide';

function Carousel() {
  // const [currentIndex, setCurrentIndex] = useState(0);

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

  // const handlePrevious = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : slides.length - 1));
  // };

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex < slides.length - 1 ? prevIndex + 1 : 0));
  // };

  return (
    <div className='w-[1440px] m-auto h-[676px] flex gap-[80px] Carousel' id="testimonials">
      <div className="carousel h-[390px] gap-[48px] flex justify-between">
        {/* <button onClick={handlePrevious} className="carousel-button" style={{borderRadius:"50%"}}>
          <img className='m-[auto] ' src='/Testimonial/Icon1.png' alt="Previous Slide Icon" /></button> */}
        <div className="slides-container w-[768px] flex flex-col m-auto">
          {slides.map((slide, index) => (
            <Slide
              key={index}
              title={slide.title}
              description={slide.description}
              additionalDescription={slide.additionalDescription}
              image={slide.logo}
              additionalImage={slide.additionalImage} // Pass the additional image
              // style={{ display: index === currentIndex ? '' : 'none' }}
            />
          ))}
        </div>
        {/* <button onClick={handleNext} className="carousel-button" style={{borderRadius:"50%"}}><img className='m-[auto]' src='/Testimonial/Icon.png' alt="Next Slide Icon" /></button> */}
      </div>
    </div>
  );
}

export default Carousel;
