/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Particle from './Particale'
import TypeAni from './TypeAni'
import Image from 'next/image'
import { AiFillPlayCircle, AiOutlineDownload } from 'react-icons/ai'

const Hero = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch('/path/to/your/file.pdf') // Adjust the path to your file
      const blob = await response.blob()
      const url = window.URL.createObjectURL(new Blob([blob]))
      const a = document.createElement('a')
      a.href = url
      a.download = 'file.pdf'
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading file:', error)
    }
  }

  return (
    <div className='h-[80vh] vg-[url("/images/banner.jpg")] bg-cover bg-center '>
      <Particle />
      <div className='w-4/5 grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-full items-center'>
        <div>
          <h1 className='text-3xl md:text-[50px] text-white font-bold mb-4'>
            Hi I'm <span className='text-yellow-300'>Huy</span>
          </h1>
          <TypeAni />
          <p className='mt-4 text-xl text-neutral-300'>
            2.5+ years experience in Web Development (ReactJS, NextJS ). <br />-
            Experience with RESTful APIs, JWT, Authorization <br />- Analyze
            design systems. <br />- Build a project from scratch.
          </p>
          <div className='mt-4 flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
            <button
              onClick={handleDownload}
              className=' text-white flex px-4 items-center bg-green-400 py-3 rounded-lg hover:bg-yellow-400 transition-all duration-200 text-lg font-bold space-x-2'>
              <p>Download Cv</p>
              <AiOutlineDownload size={20} />
            </button>
            <button className='flex items-center space-x-2'>
              <AiFillPlayCircle
                className='hover:text-yellow-400 transition-all duration-200 text-green-400'
                size={40}
              />
              <p className='text-xl font-semibold text-white'>
                Watch the Video
              </p>
            </button>
          </div>
        </div>
        <div>
          <div className='w-[500px] hidden bg-green-400 relative lg:flex items-center rounded-full h-[500px]'>
            <Image
              src={'/images/u1.jpg'}
              alt='user'
              layout='fill'
              className='object-cover rounded-full'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
