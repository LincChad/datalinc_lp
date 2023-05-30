import React from 'react'
import '../index.css';

const Navbar = () => {
  return (
    <>
    
    <header className="text-white body-font p-0 font-MontserratRegular header">
    <div className="container mx-auto flex flex-wrap px-1 flex-col md:flex-row items-center">
      <a className=" flex-wrap flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='www.datalinc.io'>
        <span className='w-20 header-logo'><img src='/logo.png' alt='datalinc logo'></img></span>
        <span className='w-44'><img src='/datalinc.png' alt='datalinc logo'></img></span>
      </a>
      {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center" data-aos="zoom-in">
        <Link href="/" className="mr-5 hover:text-[#3bc2ef] hover:scale-110 text-lg link link-underline link-underline-black transition-all">Home</Link>
        <Link href="/About" className="mr-5 hover:text-[#3bc2ef] hover:scale-110 text-lg link link-underline link-underline-black transition-all">About</Link>
        <Link href="/Vision" className="mr-5 hover:text-[#3bc2ef] hover:scale-110 text-lg link link-underline link-underline-black transition-all">Our Vision</Link>
        <Link href="/Contact" className="mr-5 hover:text-[#3bc2ef] hover:scale-110 text-lg link link-underline link-underline-black transition-all">Contact</Link>
      </nav> */}
    </div>
  </header>
  
  </>
  )
}

export default Navbar