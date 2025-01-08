// import React, { useState } from 'react';

// function ContactUs() {
//   return (
//    <>
//    ContactUs
//    </>
//   );
// }

// export default ContactUs;
// <div className="flex flex-col items-center justify-center min-h-screen bg-white">
//   {/* Header */}
//   <div
//     className="w-full text-center py-8 text-white text-4xl font-bold tracking-wide"
//     style={{ backgroundColor: '#6A3A9F', fontFamily: "'Poppins', sans-serif" }}
//   >
//     ASK A QUESTION?
//   </div>






// import React from "react";
// import Footer from "../components/Footer.jsx";
// const ContactUs = () => {
//   return (
//     <>
//     <div className="mx-4 mt-8">
//       <div className="flex flex-col items-center justify-start bg-white ">
//         {/* Header */}
//         <div
//           className="w-full text-center flex-grow flex items-center justify-center text-white text-4xl font-bold tracking-wide rounded-3xl"
//           style={{
//             backgroundColor: "#6A3A9F",
//             fontFamily: "'Caveat', cursive",
//             height: "40vh", // Cover half the vertical height
//           }}
//         >
//           ASK A QUESTION?
//         </div>

//         {/* Form */}
//         <div className="w-11/12 md:w-1/2 lg:w-1/3 bg-white mt-10 shadow-md rounded-lg p-6">
//           <form className="space-y-4">
//             {/* Name Input */}
//             {/* <div className="flex items-center space-x-2 rounded-md p-2">
//             <input
//               type="text"
//               placeholder="Name"
//               className="flex-grow focus:outline-none placeholder-gray-400 bg-[#D9D9D9] p-2 rounded-md"
//             />
//           </div> */}

//             <div className="flex items-center space-x-2 rounded-2xl p-2 bg-[#D9D9D9] transition-transform transform hover:scale-105">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 448 512"
//                 className="w-6 h-6 bg-[#D9D9D9] "
//               >
//                 <path
//                   fill="#6a3a9f"
//                   d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
//                 />
//               </svg>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="flex-grow focus:outline-none placeholder-gray-400 bg-[#D9D9D9] p-2 rounded-md"
//               />
//             </div>

//             {/* Email Input */}
//             {/* <div className="flex items-center space-x-2 rounded-md p-2 ">
//             <input
//               type="email"
//               placeholder="Email"
//               // className="flex-grow focus:outline-none placeholder-gray-400"
//               className="flex-grow focus:outline-none placeholder-gray-400 bg-[#D9D9D9] p-2 rounded-md"
//             />
//           </div> */}

//             <div className="flex items-center space-x-2 rounded-2xl p-2 bg-[#D9D9D9] transition-transform transform hover:scale-105">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 512 512"
//                 className="w-6 h-6 text-[#6a3a9f] bg-[#D9D9D9]"
//               >
//                 <path
//                   fill="currentColor"
//                   d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
//                 />
//               </svg>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="flex-grow focus:outline-none placeholder-gray-400 bg-[#D9D9D9] p-2 rounded-md"
//               />
//             </div>

//             {/* Message Input */}
//             <div className="rounded-2xl p-2 bg-[#D9D9D9] transition-transform transform hover:scale-105">
//               <textarea
//                 placeholder="Message"
//                 className="w-full h-32 focus:outline-none placeholder-gray-400 bg-[#D9D9D9] resize-none rounded-md p-2"
//               />
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 className="w-1/3 bg-[#6A3A9F] text-white py-2 rounded-full hover:bg-purple-600 transition-transform transform hover:scale-105 "
//               >
//                 {/* transition-transform transform hover:scale-105 */}
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       </div>
//       {/* <Footer></Footer> */}
//     </>
//   );
// };

// export default ContactUs;












// code with animation


import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer.jsx";

const ContactUs = () => {
  return (
    <>
      <div className="mx-4 mt-8">
        <div className="flex flex-col items-center justify-start bg-white">
          {/* Header */}
          <motion.div
            className="w-full text-center flex-grow flex items-center justify-center text-white text-4xl font-bold tracking-wide rounded-3xl"
            style={{
              backgroundColor: "#6A3A9F",
              fontFamily: "'Caveat', cursive",
              height: "40vh",
            }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            ASK A QUESTION?
          </motion.div>

          {/* Form */}
          <motion.div
            className="w-11/12 md:w-1/2 lg:w-1/3 bg-white mt-10 shadow-md rounded-lg p-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-4">
              {/* Name Input */}
              <motion.div
                className="flex items-center space-x-2 rounded-2xl p-2 bg-[#D9D9D9] transition-transform transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-6 h-6 bg-[#D9D9D9]"
                >
                  <path
                    fill="#6a3a9f"
                    d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Name"
                  className="flex-grow focus:outline-none placeholder-gray-400 bg-[#D9D9D9] p-2 rounded-md"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                className="flex items-center space-x-2 rounded-2xl p-2 bg-[#D9D9D9] transition-transform transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-6 h-6 text-[#6a3a9f] bg-[#D9D9D9]"
                >
                  <path
                    fill="currentColor"
                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                  />
                </svg>
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-grow focus:outline-none placeholder-gray-400 bg-[#D9D9D9] p-2 rounded-md"
                />
              </motion.div>

              {/* Message Input */}
              <motion.div
                className="rounded-2xl p-2 bg-[#D9D9D9] transition-transform transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
              >
                <textarea
                  placeholder="Message"
                  className="w-full h-32 focus:outline-none placeholder-gray-400 bg-[#D9D9D9] resize-none rounded-md p-2"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <button
                  type="submit"
                  className="w-1/3 bg-[#6A3A9F] text-white py-2 rounded-full hover:bg-purple-600 transition-transform transform hover:scale-105"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
};

export default ContactUs;
