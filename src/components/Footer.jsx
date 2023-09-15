import React from 'react'
import logo from '../assets/img/logo-white.svg'
import fb from "../assets/img/icon-facebook.svg"
import tube from "../assets/img/icon-youtube.svg"
import tweet from "../assets/img/icon-twitter.svg"
import pin from "../assets/img/icon-pinterest.svg"
import insta from "../assets/img/icon-instagram.svg"

const Footer = () => {
  return (
    <section id='footer'>
        <footer className='bg-veryDarkBlue'>
            <div className='container flex flex-col-reverse justify-between
            px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
                {/* logo and social links container */}
                <div className='flex flex-col-reverse items-center justify-between
                space-y-12 md:flex-col md:space-y-0 md:items-start'>
                    <div className='mx-auto my-6 text-center text-white md:hidden'>
                        Copyright &copy; 2023, All Rights Reserved
                    </div>
                    {/* logo */}
                    <div>
                        <img src={logo} alt="" className='h-8'/>
                    </div>
                    {/* social links container */}
                    <div className='flex justify-center space-x-4'>
                        {/* link1 */}
                        <a href="">
                            <img src={fb} alt="" className='h-8'/>
                        </a>

                        {/* link2 */}
                        <a href="">
                            <img src={tube} alt="" className='h-8'/>
                        </a>

                        {/* link3 */}
                        <a href="">
                            <img src={tweet} alt="" className='h-8'/>
                        </a>

                        {/* link4 */}
                        <a href="">
                            <img src={pin} alt="" className='h-8'/>
                        </a>

                        {/* link5 */}
                        <a href="">
                            <img src={insta} alt="" className='h-8'/>
                        </a>
                    </div>
                </div>
                {/* list container */}
                <div className='flex justify-around space-x-32 '>
                    <div className='flex  flex-col space-y-3 text-white '>
                        <a href="" className='hover:text-brightRed'>Home</a>
                        <a href="" className='hover:text-brightRed'>Pricing</a>
                        <a href="" className='hover:text-brightRed'>About</a>
                        <a href="" className='hover:text-brightRed'>Products</a>
                    </div>
                    <div className='flex flex-col space-y-3 text-white'>
                    <a href="" className='hover:text-brightRed'>Carrers</a>
                        <a href="" className='hover:text-brightRed'>Community</a>
                        <a href="" className='hover:text-brightRed'>Privacy Policy</a>
                    </div>
                </div>
                {/* input container */}
                <div className='flex flex-col justify-between'>
                    <form action="" className='flex space-x-3'>
                        <input type="text" className='flex-1 px-4 rounded-full
                        focus:outline-none' placeholder='updates in your inbox' />
                        <button className='px-6 py-2 text-white rounded-full
                        bg-brightRed, hover:to-brightRedLight focus:outline-none'>Go</button>
                    </form>
                    <div className='hidden text-white md:block'>
                        Copyright &copy; 2023, All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    </section>
  )
}

export default Footer
