import React from 'react'
import bulb from '../assets/bulb.png'
import gradient from '../assets/gradient.png'
import pattern from '../assets/pattern.svg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import 'animate.css';

const HomePage = () => {

  const penIcon = <FontAwesomeIcon icon={faPenToSquare} style={{color: "#ffffff",}} />;

  return (
    <div className='flex flex-col-reverse justify-between items-center gap-3 md:flex-row'>
      <div className='grid gap-4 max-w-xl'>
        <h1 className='animate__animated animate__fadeInUp text-3xl font-black drop-shadow-md md:text-5xl'>WHAT <span className='text-primary '>K-12 STRAND</span> SUITS YOU THE MOST?</h1>
        <p className='animate__animated animate__fadeInUp animate__delay-1s text-[.9rem] text-secondary md:text-base'>Your future, your choice: Let us help you find the K-12 strand that's perfect for you!</p>
        <ul className='animate__animated animate__fadeInUp animate__delay-2s flex gap-4 items-center'>
          <li className='flex'><Link to='test' className='call-to-action'>Get Started {penIcon}</Link></li>
          <li><Link to='about' className='text-primary'>Learn more...</Link></li>
        </ul>
      </div>
      <div className='animate__animated animate__fadeIn relative grid place-items-center max-w-lg'>
        <img className='absolute animate' src={bulb} alt="" />
        <img src={gradient} alt="" />
        <img className='absolute -z-[2] top-0 right-0 w-40 sm:w-50 md:w-60' src={pattern} alt="" />
        <img className='absolute -z-[2] bottom-0 left-0 w-40 sm:w-50 md:w-60' src={pattern} alt="" />
      </div>
    </div>
  )
}

export default HomePage
