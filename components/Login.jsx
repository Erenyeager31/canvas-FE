// import React, { useState } from 'react';

// function Login() {
//   return (
//    <>
//    Login
//    </>
//   );
// }

// export default Login;

// import React from "react";
// import { Link } from "react-router-dom";
// function Login() {
//   return (
//     <>
//       <div className=" mx-4 mt-16">
//         <div className="bg-[#6A3A9F] flex items-center justify-center mt-[11rem] bg-white">
//           <div className="bg-[#6A3A9F] text-white p-8 rounded-tr-[4rem] rounded-bl-[4rem] w-full max-w-md">
//             <h2 className=" bg-[#6A3A9F] text-[2.5rem] font-bold text-center mb-6"
//             style={{fontFamily: "'Caveat', cursive"}}
//             >
//               Login
//             </h2>
//             <form className=" bg-[#6A3A9F] space-y-4">
//               {/* <div className=" bg-[#6A3A9F]">
//             <label className=" bg-[#6A3A9F] block text-sm mb-1" htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               className="w-full p-2 text-black rounded border-none outline-none focus:ring-2 focus:ring-white rounded-2xl"
//               required
//             > </input>
//           </div> */}

//               <div className=" bg-[#6A3A9F]">
//                 <label
//                   className=" bg-[#6A3A9F] block text-sm mb-1"
//                   htmlFor="email"
//                 >
//                   Email
//                 </label>
//                 <div className="flex items-center bg-white p-2 rounded-2xl transition-transform transform hover:scale-105">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 512 512"
//                     className="w-6 h-6 mr-2"
//                   >
//                     <path
//                       fill="#6A3A9F"
//                       d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
//                     />
//                   </svg>
//                   <input
//                     type="email"
//                     id="email"
//                     className="w-full p-2 bg-white text-black  border-none outline-none"
//                     // className="w-full p-2 bg-white text-black  border-none outline-none focus:ring-2 focus:ring-[#6A3A9F]"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* <div className=" bg-[#6A3A9F]">
//             <label className=" bg-[#6A3A9F] block text-sm mb-1" htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               className="w-full p-2 text-black rounded border-none outline-none focus:ring-2 focus:ring-white rounded-2xl"
//               required
//             />
//           </div> */}

//               <div className=" bg-[#6A3A9F] ">
//                 <label
//                   className="bg-[#6A3A9F] block text-sm mb-1"
//                   htmlFor="password"
//                 >
//                   Password
//                 </label>
//                 <div className="flex items-center bg-white p-2 rounded-2xl transition-transform transform hover:scale-105">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 512 512"
//                     className="w-6 h-6 mr-2"
//                   >
//                     <path
//                       fill="#6A3A9F"
//                       d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"
//                     />
//                   </svg>
//                   <input
//                     type="password"
//                     id="password"
//                     className="w-full p-2 bg-white text-black border-none outline-none "
//                     // className="w-full p-2 bg-white text-black border-none outline-none focus:ring-2 focus:ring-[#6A3A9F]"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="bg-[#6A3A9F] flex justify-center">
//                 <button
//                   type="submit"
//                   className="w-1/3 bg-white text-[#6A3A9F] font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition transition-transform transform hover:scale-105"
//                   // className="w-1/3 bg-white text-[#6A3A9F] font-bold py-2 rounded hover:bg-gray-200 transition"
//                 >
//                   Login
//                 </button>
//               </div>
//             </form>
//             <p className=" bg-[#6A3A9F] mt-4 text-center text-sm italic">
//               Don’t have an account?{" "}
//               <Link
//                 to="/signup"
//                 className=" bg-[#6A3A9F] text-blue-400 underline hover:text-gray-300"
//               >
//                 Sign-up
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;










// code with animation





import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Importing Framer Motion

function Login() {
  return (
    <>
      <div className=" mx-4 mt-16">
        <motion.div
          className="bg-[#6A3A9F] flex items-center justify-center mt-[11rem] bg-white"
          initial={{ opacity: 0, scale: 0.95 }} // Initial state
          animate={{ opacity: 1, scale: 1 }} // Final state
          transition={{ duration: 0.5 }} // Transition duration
        >
          <motion.div
            className="bg-[#6A3A9F] text-white p-8 rounded-tr-[4rem] rounded-bl-[4rem] w-full max-w-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }} // Animating form with slight delay
          >
            <h2
              className=" bg-[#6A3A9F] text-[2.5rem] font-bold text-center mb-6"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              Login
            </h2>
            <form className=" bg-[#6A3A9F] space-y-4">
              <div className=" bg-[#6A3A9F]">
                <label
                  className=" bg-[#6A3A9F] block text-sm mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="flex items-center bg-white p-2 rounded-2xl transition-transform transform hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      fill="#6A3A9F"
                      d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                    />
                  </svg>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 bg-white text-black  border-none outline-none"
                    required
                  />
                </div>
              </div>

              <div className=" bg-[#6A3A9F]">
                <label
                  className="bg-[#6A3A9F] block text-sm mb-1"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="flex items-center bg-white p-2 rounded-2xl transition-transform transform hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      fill="#6A3A9F"
                      d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"
                    />
                  </svg>
                  <input
                    type="password"
                    id="password"
                    className="w-full p-2 bg-white text-black border-none outline-none "
                    required
                  />
                </div>
              </div>

              <div className="bg-[#6A3A9F] flex justify-center">
                <button
                  type="submit"
                  className="w-1/3 bg-white text-[#6A3A9F] font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition transition-transform transform hover:scale-105"
                  // whileHover={{ scale: 1.1 }} // Hover scale effect
                  // transition={{ duration: 0.2 }}
                >
                  Login
                </button>
              </div>
            </form>
            <p className=" bg-[#6A3A9F] mt-4 text-center text-sm italic">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className=" bg-[#6A3A9F] text-blue-400 underline hover:text-gray-300"
              >
                Sign-up
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Login;
