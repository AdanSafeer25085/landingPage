import React, { useState, useRef, useEffect } from 'react';
import './CustomDropdown.css';

const CustomDropdown = ({ 
  options, 
  value, 
  onChange, 
  placeholder = "Select an option",
  name,
  required = false 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value || '');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setSelectedOption(value || '');
  }, [value]);

  const handleSelect = (optionValue, optionLabel) => {
    setSelectedOption(optionValue);
    setIsOpen(false);
    if (onChange) {
      onChange({
        target: {
          name: name,
          value: optionValue
        }
      });
    }
  };

  const getSelectedLabel = () => {
    const selected = options.find(opt => opt.value === selectedOption);
    return selected ? selected.label : placeholder;
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        className="w-full p-[12px] rounded-[8px] border border-gray-300 focus:border-black bg-white cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={selectedOption ? 'text-black' : 'text-gray-500'}>
          {getSelectedLabel()}
        </span>
        <svg 
          className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-[8px] shadow-lg z-50 max-h-[125px] custom-dropdown-scroll">
          {options.map((option, index) => (
            <div
              key={index}
              className="p-[12px] hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
              onClick={() => handleSelect(option.value, option.label)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      
      {/* Hidden select for form validation */}
      <select
        name={name}
        value={selectedOption}
        onChange={() => {}} // Controlled by custom dropdown
        required={required}
        className="absolute opacity-0 pointer-events-none"
        tabIndex={-1}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomDropdown;