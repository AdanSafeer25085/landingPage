"use client";
import React, { useState } from "react";

const Hero = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track the index of the open question

  // Sample FAQs data
  const faqs = [
    {
      question: "How do you find qualified candidates?",
      answer:
        "Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.",
    },
    {
      question: "How do you vet applicants?",
      answer:
        "Shipping usually takes 5-7 business days for standard delivery. Expedited shipping is available at checkout.",
    },
    {
      question: "Can I hire part-time?",
      answer: "Yes, we ship to over 50 countries around the world!",
    },
    {
      question: "Do I need to sponsor candidates with a work Visa?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email to monitor the delivery status.",
    },
    {
      question: "How do I pay candidates?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email to monitor the delivery status.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the open/close state
  };

  return (
    <div className="max-w-[1440px] h-[648px] mx-auto py-[112px] px-[64px] gap-[80px] bg-[#FFFFFF]">
      <div className="max-w-[1312px] h-[424px] flex gap-[80px]">
        <div className="w-[500px] flex flex-col gap-[32px]">
          <div className="flex flex-col gap-[24px]">
            <h2 className="font-semibold text-[48px] leading-[57.6px] text-[#000000]">
              FAQs
            </h2>
            <p className="font-normal text-[18px] leading-[27.6px] text-[#666666]">
              Still have questions? Book a call to learn more
            </p>
          </div>
          <button className="w-[132px] h-[48px] rounded-[12px] border-[1px] border-[#000000] py-[12px] px-[24px] flex items-center justify-center">
            <span className="font-light text-[15px] leading-[24px]">Book a call</span>
          </button>
        </div>

        <div className="w-[732px] flex flex-col gap-[16px]">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-[12px] overflow-hidden">
              <div
                className="w-full font-semibold flex justify-between items-center py-[15px] px-[24px] rounded-[12px] bg-[#F7F7F7] cursor-pointer"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <span className="w-[28px] h-[28px] flex items-center justify-center text-[32px] font-extralight">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              <div
                id={`faq-${index}`}
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[200px] py-[12px]" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 font-extralight px-[24px]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
