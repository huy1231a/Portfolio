import { TypeAnimation } from 'react-type-animation'

const TypeAni = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Coder',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web',
        1000,
        'Junior',
        1000,
        'Developer',
        1000,
      ]}
      wrapper='span'
      speed={50}
      className='text-[2rem] md:text-[50px] text-green-500 font-bold'
      style={{ fontSize: '2rem', display: 'inline-block' }}
      repeat={Infinity}
    />
  )
}

export default TypeAni
