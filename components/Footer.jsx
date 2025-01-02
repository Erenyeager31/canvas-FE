import React from 'react';
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
    <div className="mx-4 mt-8">
    <footer className="bg-[#6A3A9F] rounded-3xl text-white py-8 px-4">
      <div className="bg-[#6A3A9F] max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Logo and Tagline */}
        <div className="bg-[#6A3A9F] text-center lg:text-left mb-4 lg:mb-0">
          <h1 className="bg-[#6A3A9F]  text-6xl lg:text-8xl font-bold" style={{fontFamily: "'Caveat', cursive"}}>CANVAS</h1>
          <p className="bg-[#6A3A9F] mt-2 text-lg text-center">Want to create a video? <br /> Relax. We got you.</p>
          <div className="mt-2 bg-[#6A3A9F] flex justify-center items-center ">
          <Link to="/generator-step-1" className="mt-4 bg-white text-[#6A3A9F] px-6 py-2 rounded-lg font-semibold shadow hover:bg-gray-200 transition-transform transform hover:scale-105">
            CREATE VIDEO
          </Link>
          </div>
        </div>
        {/* Navigation Links */}
        
        <nav className="bg-[#6A3A9F] text-center lg:text-right">
          <ul className="bg-[#6A3A9F] space-y-2 lg:space-y-0 lg:space-x-6 lg:flex">
            <li className='bg-[#6A3A9F]'>
              <Link to="/" className="bg-[#6A3A9F] hover:underline">Home</Link>
            </li>
            <li className='bg-[#6A3A9F]'>
              <Link to="/about-us" className="bg-[#6A3A9F] hover:underline">About</Link>
            </li>
            <li className='bg-[#6A3A9F]'>
              <Link to="/contact-us" className="bg-[#6A3A9F] hover:underline">Contact Us</Link>
            </li>
            <li className='bg-[#6A3A9F]'>
              <Link to="/community" className="bg-[#6A3A9F] hover:underline">Community</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
    </div>
    <div className="mt-2"></div>
    </>
  );
};

export default Footer;
