import React from 'react'
import { AiOutlineBars } from 'react-icons/ai'

interface NavProps {
  openNav: () => void
}

const Nav: React.FC<NavProps> = ({ openNav }) => {
  return (
    <div className='w-full sticky z-[10000] top-0 h-[12vh] bg-neutral-800 shadow-md'>
      <div className='flex items-center justify-between w-4/5 mx-auto h-full'>
        <h1 className='flex-[0.6] cursor-pointer text-2xl text-white font-bold'>
          QUANG
          <span className='text-yellow-300'>HUY</span>
        </h1>
        <div className='nav-link'>Home</div>
        <div className='nav-link'>About</div>
        <div className='nav-link'>Project</div>
        <div className='nav-link'>Blog</div>
        <div className='nav-link'>Contact</div>
        <div>
          <AiOutlineBars
            className='md:hidden cursor-pointer text-yellow-300'
            size={30}
            onClick={openNav}
          />
        </div>
      </div>
    </div>
  )
}

export default Nav
