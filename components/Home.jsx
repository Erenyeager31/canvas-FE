// import React from "react";
// import { Link } from "react-router-dom";
// import Footer from "../components/Footer.jsx";
// import image from "../src/assets/file.png"; // Replace with your image path

// const Home = () => {
//   return (
//     <>
//       <div className="flex flex-col md:flex-row items-center justify-between my-12 px-4">
//         <div className="text-center md:w-1/2">
//           <h1 className="text-4xl md:text-6xl font-bold text-[#6A3A9F]">
//             The fastest way to create short video
//           </h1>
//           <p className="mt-4 text-lg md:text-xl">
//             Canvas is an AI-powered tool that generates high-quality videos from
//             a simple description.
//           </p>
//           <div className="mt-8 flex justify-center">
//             <Link
//               to="/generator-step-1"
//               className="w-1/3 bg-[#6A3A9F] text-white py-2 rounded-full hover:bg-purple-600 transition-transform transform hover:scale-105"
//             >
//               Generate your first video
//             </Link>
//           </div>
//         </div>
//         <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
//           <img src={image} alt="Video generation" className="w-128 " />
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Home;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Importing framer-motion
import Footer from "../components/Footer.jsx";
import image from "../src/assets/file.png"; // Replace with your image path

const Home = () => {
  return (
    <>
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between px-4 min-h-screen" // Added min-h-screen
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="text-center md:w-1/2 flex flex-col justify-center h-full" // Ensures full height alignment
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1
            className="text-4xl md:text-6xl font-bold text-[#6A3A9F]"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            The fastest way to create short video
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Canvas is an AI-powered tool that generates high-quality videos from a simple description.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/generator-step-1"
              className="w-1/3 bg-[#6A3A9F] text-white py-2 rounded-full hover:bg-purple-600 transition-transform transform hover:scale-105"
            >
              Generate your first video
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center items-center h-full" // Ensures the image is centered
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <img src={image} alt="Video generation" className="w-128 max-h-[80vh]" />
        </motion.div>
      </motion.div>

      <Footer />
    </>
  );
};

export default Home;
