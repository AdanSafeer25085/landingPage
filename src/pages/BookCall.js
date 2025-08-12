import React, { useState } from 'react';
import PageLayout from '../components/Layout/PageLayout';
import OptimizedImage from '../components/OptimizedImage';
import '../components/header/index.css';

const BookCall = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    preferredTime: '',
    timezone: 'EST',
    topic: 'general'
  });

  const [selectedDate, setSelectedDate] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Call booking submitted:', { ...formData, selectedDate });
    // Here you would typically send the data to your backend
    alert('Your call has been scheduled! You will receive a calendar invitation within 10 minutes.');
  };

  // Generate next 14 days for date selection
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      // Skip weekends for business calls
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date);
      }
    }
    return dates.slice(0, 10); // Show 10 business days
  };

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="w-[1440px] m-auto h-[900px] flex">
        <div className="flex flex-col gap-[16px] w-[720px] h-[900px] m-auto justify-center" style={{padding:"0px 80px 0px 64px"}}>
          <div className="w-[576px] h-[252px] flex flex-col gap-[24px]">
            <h1 className="font-Metropolis text-[48px] font-semibold w-[576px] h-[174px] leading-[57.6px]">
              Schedule a Free Consultation
            </h1>
            <p className="font-Metropolis text-[18px] font-extralight w-[576px] h-[54px] leading-[27px] text-[#666666]">
              Speak with our hiring experts to learn how we can help you find the perfect Latin American talent.
            </p>
          </div>
          <li className="w-[576px] h-[104px] gap-[16px] list-none">
            <ul>
              <li className="custom-bullet">30-minute free consultation</li>
              <li className="custom-bullet">
                Expert guidance on hiring strategies
              </li>
              <li className="custom-bullet">
                No commitment required - just honest advice
              </li>
            </ul>
          </li>
        </div>
        <div className="w-[720px] h-[900px] relative">
          <div className="w-[640px] h-[900px] your-class absolute top-[-0.22px] left-[80px]"></div>
          <OptimizedImage
            className="w-[324px] h-[486px] absolute top-[207px] rounded-[8px]"
            src="/images/2nd-img.png"
            alt="Remote Latin American talent"
            width={324}
            height={486}
          />
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="w-[1440px] m-auto py-[112px] px-[64px] bg-[#FFFFFF]">
        <div className="max-w-[900px] m-auto">
          <div className="text-center mb-[48px]">
            <h2 className="text-[36px] font-semibold mb-[16px]">Book Your Free 30-Minute Call</h2>
            <p className="text-[18px] text-[#666666]">No commitment required - just an honest conversation about your hiring needs</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px]">
            {/* Form */}
            <div className="bg-[#F7F7F7] rounded-[16px] p-[32px]">
              <h3 className="text-[24px] font-semibold mb-[24px]">Your Information</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-[16px] mb-[24px]">
                  <div>
                    <label className="block text-[16px] font-semibold mb-[8px]">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-[12px] rounded-[8px] border border-gray-300 focus:border-black focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[16px] font-semibold mb-[8px]">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-[12px] rounded-[8px] border border-gray-300 focus:border-black focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[16px] font-semibold mb-[8px]">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full p-[12px] rounded-[8px] border border-gray-300 focus:border-black focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[16px] font-semibold mb-[8px]">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-[12px] rounded-[8px] border border-gray-300 focus:border-black focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[16px] font-semibold mb-[8px]">What would you like to discuss?</label>
                    <select
                      name="topic"
                      value={formData.topic}
                      onChange={handleInputChange}
                      className="w-full p-[12px] rounded-[8px] border border-gray-300 focus:border-black focus:outline-none"
                    >
                      <option value="general">General inquiry</option>
                      <option value="specific-role">Specific role requirements</option>
                      <option value="pricing">Pricing and packages</option>
                      <option value="process">Hiring process</option>
                      <option value="multiple-roles">Multiple positions</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[16px] font-semibold mb-[8px]">Timezone</label>
                    <select
                      name="timezone"
                      value={formData.timezone}
                      onChange={handleInputChange}
                      className="w-full p-[12px] rounded-[8px] border border-gray-300 focus:border-black focus:outline-none"
                    >
                      <option value="EST">Eastern Time (EST)</option>
                      <option value="CST">Central Time (CST)</option>
                      <option value="MST">Mountain Time (MST)</option>
                      <option value="PST">Pacific Time (PST)</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>

            {/* Calendar */}
            <div>
              <h3 className="text-[24px] font-semibold mb-[24px]">Select Date & Time</h3>
              
              {/* Date Selection */}
              <div className="mb-[24px]">
                <h4 className="text-[18px] font-semibold mb-[12px]">Available Dates</h4>
                <div className="grid grid-cols-2 gap-[8px]">
                  {getAvailableDates().map((date, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setSelectedDate(date.toISOString().split('T')[0])}
                      className={`p-[12px] rounded-[8px] border text-[14px] transition-all ${
                        selectedDate === date.toISOString().split('T')[0]
                          ? 'bg-[#000000] text-white border-black'
                          : 'bg-white border-gray-300 hover:border-black'
                      }`}
                    >
                      {date.toLocaleDateString('en-US', { 
                        weekday: 'short', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              {selectedDate && (
                <div className="mb-[24px]">
                  <h4 className="text-[18px] font-semibold mb-[12px]">Available Times ({formData.timezone})</h4>
                  <div className="grid grid-cols-3 gap-[8px]">
                    {timeSlots.map((time, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, preferredTime: time }))}
                        className={`p-[10px] rounded-[8px] border text-[14px] transition-all ${
                          formData.preferredTime === time
                            ? 'bg-[#000000] text-white border-black'
                            : 'bg-white border-gray-300 hover:border-black'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Submit Button */}
              {selectedDate && formData.preferredTime && (
                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#000000] text-white py-[16px] px-[32px] rounded-[12px] text-[18px] font-semibold transition-all hover:bg-[#2a2a2a] hover:scale-105"
                >
                  Schedule Call
                </button>
              )}
            </div>
          </div>

          {/* What to Expect */}
          <div className="mt-[64px] bg-[#F7F7F7] rounded-[16px] p-[32px]">
            <h3 className="text-[24px] font-semibold mb-[24px] text-center">What to Expect on the Call</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              <div className="text-center">
                <div className="w-[60px] h-[60px] bg-[#000000] rounded-full flex items-center justify-center mx-auto mb-[16px]">
                  <span className="text-white text-[24px] font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-[8px]">Understand Your Needs</h4>
                <p className="text-[14px] text-[#666666]">We'll discuss your specific requirements, timeline, and budget</p>
              </div>
              <div className="text-center">
                <div className="w-[60px] h-[60px] bg-[#000000] rounded-full flex items-center justify-center mx-auto mb-[16px]">
                  <span className="text-white text-[24px] font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-[8px]">Explain Our Process</h4>
                <p className="text-[14px] text-[#666666]">Learn how we source, vet, and match candidates to your needs</p>
              </div>
              <div className="text-center">
                <div className="w-[60px] h-[60px] bg-[#000000] rounded-full flex items-center justify-center mx-auto mb-[16px]">
                  <span className="text-white text-[24px] font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-[8px]">Next Steps</h4>
                <p className="text-[14px] text-[#666666]">If it's a good fit, we'll start sourcing candidates immediately</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BookCall;