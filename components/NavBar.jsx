// import React from "react";
// import "../components/CSS/Navbar.css";
// const NavBar = () => {
//   return (
//     <>
//       <div className="rounded-full mx-4 my-1 from-purple-500 to-purple-700 text-white py-4 px-4 animated-border bg-black">
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="font-bold text-xl ">CANVAS</div>
//           <div className="space-x-4">
//             {/* Add navigation links or icons here if needed */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NavBar;

import React, { useState } from 'react';
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <div className='sticky top-0'>
      <nav className="flex items-center justify-between h-16 px-12 bg-white shadow-lg shadow-purple-500/75">
        <span className="text-2xl font-bold text-[#6A3A9F]" style={{fontFamily: "'Caveat', cursive"}}>CANVAS</span>
        <button
          className="flex flex-col justify-center items-center p-2 transition-transform transform hover:scale-150"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 h-1 bg-black mb-1"></div>
          <div className="w-6 h-1 bg-black mb-1"></div>
          <div className="w-6 h-1 bg-black"></div>
        </button>
      </nav>

      {menuOpen && (
        // <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg border-l transition-transform transform translate-x-0">
        <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg border-l transition-transform transform translate-x-0 rounded-tl-xl rounded-bl-xl ">
          <button
            className="self-end p-4 text-4xl transition-transform transform hover:scale-150"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
          <nav className="flex flex-col items-start p-6 space-y-4">

            <Link to="/" className="flex items-center text-gray-800 hover:bg-gray-100 px-4 py-2 rounded w-full transition-transform transform hover:scale-105">
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="#6A3A9F" d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
              </svg>
              Home
            </Link>

            <Link to="/about-us" className="flex items-center text-gray-800 hover:bg-gray-100 px-4 py-2 rounded w-full transition-transform transform hover:scale-105">
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="#6A3A9F" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 256l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16L80 384c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
              </svg>
              About
            </Link>

            <Link to="/contact-us" className="flex items-center text-gray-800 hover:bg-gray-100 px-4 py-2 rounded w-full transition-transform transform hover:scale-105">
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#6A3A9F" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
              </svg>
              Contact Us
            </Link>

            <Link to="/generator-step-1" className="flex items-center text-gray-800 hover:bg-gray-100 px-4 py-2 rounded w-full transition-transform transform hover:scale-105">
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="#6A3A9F" d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"/>
              </svg>
              Create Video
            </Link>

            <Link to="community" className="flex items-center text-gray-800 hover:bg-gray-100 px-4 py-2 rounded w-full transition-transform transform hover:scale-105">
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path fill="#6A3A9F" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"/>
              </svg>
                Community
            </Link>
 
            <Link to="user_details" className="flex items-center text-gray-800 hover:bg-gray-100 px-4 py-2 rounded w-full transition-transform transform hover:scale-105 ">
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="#6A3A9F" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
              </svg>
                User Details
            </Link>
            
          </nav>
          {/* Login and Sign Up Buttons */}
          {/* <div className="p-6 mt-auto flex space-x-4"> */}
          <div className="p-6 mt-2 flex space-x-4">
            <Link to="/login" className="w-full py-2 px-4 bg-[#6A3A9F] text-center text-white rounded-md hover:bg-purple-600 transition-transform transform hover:scale-105">
              Login
            </Link>
            <Link to="/signup" className="w-full py-2 px-4 bg-[#6A3A9F] text-center text-white rounded-md hover:bg-purple-600 transition-transform transform hover:scale-105">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Navbar;
