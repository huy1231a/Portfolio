import React from 'react'

const About = () => {
  return (
    <div className='pb-12 bg-neutral-950 pt-14 md:pt-24'>
      <div className='grid grid-cols-1 md:grid-cols-2 w-4/5 mx-auto items-center gap-12'>
        <div>
          <h1 className='text-xl font-bold text-green-500 uppercase'>
            About Me
          </h1>
          <h2 className='text-2xl md:text-3xl lg:text-4xl md:leading-10 leading-7 capitalize mb-12 font-bold text-white'>
            Tranforming <span className='text-yellow-300'>Visions</span>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default About
