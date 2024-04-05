import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/Components/Nav'
import { useState } from 'react'
import NavMobile from '@/Components/NavMobile'
import Hero from '@/Components/Hero'
import About from '@/Components/About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [nav, setNav] = useState<boolean>(false)

  const openNav = () => {
    setTimeout(() => {
      setNav(!nav)
    }, 300)
  }
  const closeNav = () => {
    setNav(nav)
  }

  return (
    <div className='overflow-x-hidden'>
      <div>
        <NavMobile nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        <Hero />
        <div className='relative z-[30]'>
          <About />
        </div>
      </div>
    </div>
  )
}
