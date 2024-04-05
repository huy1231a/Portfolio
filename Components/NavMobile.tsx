import React from 'react'
import { FaXmark } from 'react-icons/fa6'

interface NavMobileProps {
  nav: boolean
  closeNav: () => void
}

const NavMobile: React.FC<NavMobileProps> = ({ nav, closeNav }) => {
  const navAnimation = nav ? 'translate-x-0' : 'translate-x-[-100%]'
  return (
    <div
      className={`fixed ${navAnimation} md:hidden transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-neutral-800`}>
      <div className='w-[100vw] h-screen flex flex-col justify-center items-center gap-6'>
        <div className='nav-link-mobile'>Home</div>
        <div className='nav-link-mobile'>About</div>
        <div className='nav-link-mobile'>Project</div>
        <div className='nav-link-mobile'>Blog</div>
        <div className='nav-link-mobile'>Contact</div>
      </div>
    </div>
  )
}

export default NavMobile
