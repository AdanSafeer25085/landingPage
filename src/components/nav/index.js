import React from 'react'
import CompanyLogo from '../icons/company-logo'
import useButtonAction from '../../hooks/useButtonAction'
import './index.css'

const Nav = () => {
  const { handleStartHiring, handleNavigation, handleHome } = useButtonAction();

  return (
    <div className='gradient-border flex items-center justify-between px-[64px] h-[72px] w-[1440px] m-[auto] '>
      <div onClick={handleHome} className="cursor-pointer">
        <CompanyLogo />
      </div>
      <div className='flex items-center gap-[32px]' >
        <span 
          className='cursor-pointer underline-custom'
          onClick={() => handleNavigation('how-it-works')}
        > 
          How it works
        </span>
        <span 
          className='cursor-pointer underline-custom'
          onClick={() => handleNavigation('pricing')}
        >
          Pricing
        </span>
        <span 
          className='cursor-pointer underline-custom'
          onClick={() => handleNavigation('roles')}
        >
          Roles
        </span>
        <span 
          className="cursor-pointer underline-custom"
          onClick={() => handleNavigation('our-promise')}
        >
          Our promise
        </span>
        <button 
          className='text-white px-[20px] py-[8px] rounded-[10px] bg-[#231F20] transition-all hover:bg-[#3a3a3a] hover:scale-105'
          onClick={handleStartHiring}
        >
          Start Hiring
        </button>
      </div>
    </div>
  )
}

export default Nav;

