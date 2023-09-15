import React from 'react'
import logo from '../assets/img/logo.svg'


const Navbar = () => {

  const [openClass, setOpenClass] = React.useState(null);
  const [mobileMenu, setMobileMenu] = React.useState("hidden")

  const buttonClicked = () =>{
    if (openClass){
      setOpenClass(null)
      setMobileMenu("hidden")
    }else{
      setOpenClass("open")
      setMobileMenu("flex")

    }
  }


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
        {/* hamburger icon */}
        <button id="menu-btn" className={`block ${openClass} hamburger md:hidden focus:outline-none`}
        onClick={buttonClicked}>
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>
        </div>
        {/* MOBILE MENU */}
        <div className='md:hidden'>
          <div id='menu' className={`absolute flex-col items-center ${mobileMenu} self-end py-8
          mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6
          drop-shadow-md`}>
            <a href="">Pricing</a>
            <a href="">Product</a>
            <a href="">About Us</a>
            <a href="">Carrers</a>
            <a href="">Community</a>
          </div>
        </div>
    </nav>
  )
}

export default Navbar
