import React from 'react'
// import Triangle from '../icons/triangle'
// import Circle from '../icons/circle'
// import Square from '../icons/square'
import CompanyLogo from '../icons/company-logo'
import './index.css'
import './index.css';
const Nav = () => {
  return (
    <div className='gradient-border flex items-center justify-between px-[64px] h-[72px] w-[1440px] m-[auto] '>
          {/* <div className='text-[#231F20] flex gap-[2px] ' >
              <span className='flex gap-[2px] ' > <Square /> LATIN</span>
              <span className='flex gap-[2px] ' > <Circle /> REMOTE</span>
              <span className='flex gap-[2px]' ><Triangle /> WORKERS</span>
          </div> */}
          <CompanyLogo />
          <div className='flex items-center gap-[32px]' >
              <span className='cursor-pointer underline-custom'> How it works</span>
              <span className='cursor-pointer underline-custom'>Pricing</span>
              <span className='cursor-pointer underline-custom'>Roles</span>
              <span className="cursor-pointer underline-custom">
                Our promise
              </span>
              <button className='text-white px-[20px] py-[8px] rounded-[10px] bg-[#231F20] ' >
                  Start Hiring
              </button>
          </div>
          
    </div>
  )
}

export default Nav;

