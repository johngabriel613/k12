import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
      <nav className='flex justify-between items-center py-6 relative z-10'>
        <div className='flex items-center gap-1'>
          <img src={logo} alt="" width={42}/>
          <span className='text-2xl font-black tracking-wider'>CNHS</span>
        </div>
        <FontAwesomeIcon className='block md:hidden cursor-pointer' icon={faBars} onClick={handleNav}/>
        <ul className={`${!nav ? 'invisible opacity-0' : 'visible opacity-100'} transition-all duration-300 ease-in-out text-sm flex flex-col items-center gap-2 b-shadow bg-[#1c1d21] py-2 px-4 rounded-md text-center absolute right-0 top-16 md:static md:bg-transparent md:flex-row md:gap-6 md:shadow-none md:visible md:opacity-100`}>
          <li><Link to='/k12/' onClick={handleNav}>home</Link></li>
          <li><Link to='about' onClick={handleNav}>about</Link></li>
          <li className='flex'><Link className='call-to-action' to='test' onClick={handleNav}>test now</Link></li>
        </ul>
      </nav>
  )
}

export default Navbar
