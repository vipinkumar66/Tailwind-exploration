import React from 'react'
import logo from '../assets/img/logo.svg'


const Navbar = () => {
  return (
    // Navbar
    <nav className='relative container mx-auto p-6'>
        {/* flex Container */}
        <div className='flex items-center justify-between'>
        {/* Logo */}
        <div className='pt-2'>
            <img src={logo} alt="" />
        </div>
        {/* menu items */}
        <div className='hidden md:flex space-x-6'>
            <a href="" className='hover:text-darkGrayishBlue'>Pricing</a>
            <a href="" className='hover:text-darkGrayishBlue'>Products</a>
            <a href="" className='hover:text-darkGrayishBlue'>About Us</a>
            <a href="" className='hover:text-darkGrayishBlue'>Carrers</a>
        </div>
        {/* button */}
        <a href="" className='hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baselie hover:bg-brightRedLight'>
            Get Started
        </a>
        </div>
    </nav>
  )
}

export default Navbar
