// import React from 'react'

// const Community = () => {
//   return (
//     <>
//     <div>

//       Community
//     </div>
//     </>
//   )
// }

// export default Community


import React from 'react';
import { motion } from 'framer-motion';

const circleVariants = {
  initial: { scale: 0.9 },
  animate: { scale: 1 },
  hover: { scale: 1.1 },
};

const Community = () => {
  return (
    <>
    <div className="mt-20 bg-white p-8 md:p-16 text-center">
         <motion.h1
      className="text-4xl md:text-6xl font-bold mb-8 text-[#6A3A9F]"  // Adjusted size
      style={{ fontFamily: "'Caveat', cursive" }}
      initial={{ opacity: 0, x: -100 }}  // Starting state for animation
      animate={{ opacity: 1, x: 0 }}     // Final state for animation
      transition={{ duration: 1 }}        // Animation duration
      
    >
      The Only Community of Creators & Pros You Will Ever Need
    </motion.h1>
    <div className="flex flex-wrap justify-center items-center space-x-8 mb-12"> {/* Increased space between circles */}
        
        {/* Smallest Circle */}
        <motion.div
          className="w-36 h-36 sm:w-40 sm:h-40 bg-blue-100 rounded-full flex items-center justify-center"
          variants={circleVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          transition={{ duration: 0.3 }}
        >
          <div className="w-32 h-32 sm:w-36 sm:h-36 bg-blue-300 rounded-full"></div>
        </motion.div>

        {/* Small Circle */}
        <motion.div
          className="w-40 h-40 sm:w-44 sm:h-44 bg-blue-100 rounded-full flex items-center justify-center"
          variants={circleVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          transition={{ duration: 0.3 }}
        >
          <div className="w-36 h-36 sm:w-40 sm:h-40 bg-blue-300 rounded-full"></div>
        </motion.div>

        {/* Middle (Largest) Circle */}
        <motion.div
          className="w-56 h-56 sm:w-64 sm:h-64 bg-blue-100 rounded-full flex items-center justify-center"
          variants={circleVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          transition={{ duration: 0.3 }}
        >
          <div className="w-48 h-48 sm:w-56 sm:h-56 bg-blue-300 rounded-full"></div>
        </motion.div>

        {/* Small Circle */}
        <motion.div
          className="w-40 h-40 sm:w-44 sm:h-44 bg-blue-100 rounded-full flex items-center justify-center"
          variants={circleVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          transition={{ duration: 0.3 }}
        >
          <div className="w-36 h-36 sm:w-40 sm:h-40 bg-blue-300 rounded-full"></div>
        </motion.div>

        {/* Smallest Circle */}
        <motion.div
          className="w-36 h-36 sm:w-40 sm:h-40 bg-blue-100 rounded-full flex items-center justify-center"
          variants={circleVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          transition={{ duration: 0.3 }}
        >
          <div className="w-32 h-32 sm:w-36 sm:h-36 bg-blue-300 rounded-full"></div>
        </motion.div>

      </div>
      <button className="bg-[#6A3A9F] text-white px-6 py-3 rounded-full text-sm md:text-base hover:bg-purple-600 transition-transform transform hover:scale-105">
        Join Community on Canvas
      </button>
    </div>
    </>
  );
};

export default Community;
