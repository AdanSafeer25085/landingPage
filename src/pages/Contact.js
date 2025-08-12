import React, { useState } from 'react';
import PageLayout from '../components/Layout/PageLayout';
import '../components/header/index.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
    hiringTimeframe: '2-4 weeks'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you! We will contact you within 24 hours to discuss your hiring needs.');
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="w-[1440px] m-auto h-[700px] flex">
        <div className="flex flex-col gap-[16px] w-[720px] h-[700px] m-auto justify-center" style={{padding:"0px 80px 0px 64px"}}>
          <div className="w-[576px] h-[252px] flex flex-col gap-[24px]">
            <h1 className="font-Metropolis text-[48px] font-semibold w-[576px] h-[174px] leading-[57.6px] text-center">
              Start Hiring Top Latin American Talent
            </h1>
            <p className="font-Metropolis text-[18px] font-extralight w-[576px] h-[54px] leading-[27px] text-[#666666] text-center">
              Fill out the form below and we'll match you with qualified candidates within 2 weeks.
            </p>
          </div>
          <li className="w-[576px] h-[104px] gap-[16px] list-none text-center">
            <ul>
              <li className="">Zero-risk replacement guarantee</li>
              <li className="">
                Save up to 70% compared to U.S. equivalents
              </li>
              <li className="">
                Qualified candidates ready to interview within 2 weeks
              </li>
            </ul>
          </li>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-[1440px] m-auto pb-[100px] px-[64px] bg-[#FFFFFF]">
        <div className="max-w-[800px] m-auto">
          <div className="text-center mb-[48px]">
            <h2 className="text-[36px] font-semibold mb-[16px]">Get Started Today</h2>
            <p className="text-[18px] text-[#666666]">Tell us about your hiring needs and we'll find the perfect match</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#F7F7F7] rounded-[16px] p-[48px]">
            <div className="grid grid-cols-2 gap-[24px] mb-[24px]">
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
            </div>

            <div className="grid grid-cols-2 gap-[24px] mb-[24px]">
              <div>
                <label className="block text-[16px] font-semibold mb-[8px]">Company Name *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full p-[12px] rounded-[8px] border border-gray-300 focus:border-black focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-[16px] font-semibold mb-[8px]">Role You're Hiring For *</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full p-[12px] rounded-[8px] border border-gray-300 focus:border-black focus:outline-none"
                  required
                >
                  <option value="">Select a role</option>
                  <option value="developer">Software Developer</option>
                  <option value="designer">UI/UX Designer</option>
                  <option value="marketing">Marketing Specialist</option>
                  <option value="sales">Sales Representative</option>
                  <option value="customer-support">Customer Support</option>
                  <option value="virtual-assistant">Virtual Assistant</option>
                  <option value="data-analyst">Data Analyst</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-[24px]">
              <label className="block text-[16px] font-semibold mb-[8px]">Hiring Timeframe</label>
              <select
                name="hiringTimeframe"
                value={formData.hiringTimeframe}
                onChange={handleInputChange}
                className="w-full p-[12px] rounded-[8px] border border-gray-300 focus:border-black focus:outline-none"
              >
                <option value="1-2 weeks">1-2 weeks</option>
                <option value="2-4 weeks">2-4 weeks</option>
                <option value="1-2 months">1-2 months</option>
                <option value="3+ months">3+ months</option>
              </select>
            </div>

            <div className="mb-[32px]">
              <label className="block text-[16px] font-semibold mb-[8px]">Tell us about your requirements</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-[12px] rounded-[8px] border border-gray-300 focus:border-black focus:outline-none resize-vertical"
                placeholder="Describe the skills, experience level, and any specific requirements for this role..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#000000] text-white py-[16px] px-[32px] rounded-[12px] text-[18px] font-semibold transition-all hover:bg-[#2a2a2a] hover:scale-105"
            >
              Submit Request
            </button>
          </form>

          {/* Additional Info */}
          <div className="mt-[48px] grid grid-cols-3 gap-[32px] text-center">
            <div className="p-[24px]">
              <div className="text-[32px] font-bold text-[#000000] mb-[8px]">24hrs</div>
              <p className="text-[14px] text-[#666666]">Response Time</p>
            </div>
            <div className="p-[24px]">
              <div className="text-[32px] font-bold text-[#000000] mb-[8px]">2 weeks</div>
              <p className="text-[14px] text-[#666666]">To Interview</p>
            </div>
            <div className="p-[24px]">
              <div className="text-[32px] font-bold text-[#000000] mb-[8px]">70%</div>
              <p className="text-[14px] text-[#666666]">Cost Savings</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;