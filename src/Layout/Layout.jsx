import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <div className='container px-5 pb-5 text-slate-900'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Layout
