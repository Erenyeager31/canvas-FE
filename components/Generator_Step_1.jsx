// import React from "react";
// import { Link } from "react-router-dom";
// import Generator_Step_2 from "../components/Generator_Step_2.jsx";
// const Generator_Step_1 = () => {
//   return (
//     <>
//     <div className=" mx-4 mt-16">
//       <div className="min-h-screen white">
//         <div className="bg-white w-full h-full">
//           <div className="p-6 space-y-4 bg-[#D9D9D9] rounded-3xl">
//             <h1 className="text-xl md:text-2xl font-semibold text-[#6A3A9F] bg-[#D9D9D9]"
//             style={{fontFamily: "'Caveat', cursive"}}
//             >
//               AI Video Generator
//             </h1>
//             <p className="text-gray-600 text-sm md:text-base bg-[#D9D9D9]">
//               Step 1: Generate a Script using Generative AI by describing what
//               you want to see.
//             </p>
//             <input
//               type="text"
//               placeholder="What script do you want to generate?"
//               className="w-full border border-gray-300 rounded-2xl px-4 py-2 shadow-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
//             />
//             <button className="bg-[#6A3A9F] text-white rounded-lg py-2 px-4 hover:bg-purple-700 transition transition-transform transform hover:scale-105 ">
//               Generate
//             </button>
//             <textarea
//               placeholder="Result"
//               rows="10"
//               className="w-full border border-gray-300 rounded-2xl px-4 py-2 shadow-lg focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"
//             ></textarea>
            
//             <div className="mt-2 bg-[#D9D9D9] flex space-x-4">
//             <Link to="/generator-step-2" className=" bg-[#6A3A9F] text-white rounded-lg py-2 px-4 hover:bg-purple-700 transition transition-transform transform hover:scale-105">
//               Next Step
//             </Link>
//             </div>
            
//           </div>
//         </div>
//       </div>
//       </div>
//     </>
//   );
// };

// export default Generator_Step_1;







// code with animation





import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Generator_Step_2 from "../components/Generator_Step_2.jsx";

const Generator_Step_1 = () => {
  return (
    <>
      <div className="mx-4 mt-16">
        <motion.div
          className="min-h-screen white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="bg-white w-full h-full"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="p-6 space-y-4 bg-[#D9D9D9] rounded-3xl">
              <motion.h1
                className="text-xl md:text-2xl font-semibold text-[#6A3A9F] bg-[#D9D9D9]"
                style={{ fontFamily: "'Caveat', cursive" }}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                AI Video Generator
              </motion.h1>
              <p className="text-gray-600 text-sm md:text-base bg-[#D9D9D9]">
                Step 1: Generate a Script using Generative AI by describing
                what you want to see.
              </p>
              <motion.input
                type="text"
                placeholder="What script do you want to generate?"
                className="w-full border border-gray-300 rounded-2xl px-4 py-2 shadow-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 120 }}
              />
              <motion.button
                className="bg-[#6A3A9F] text-white rounded-lg py-2 px-4 hover:bg-purple-700 transition transition-transform transform hover:scale-105"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Generate
              </motion.button>
              <motion.textarea
                placeholder="Result"
                rows="10"
                className="w-full border border-gray-300 rounded-2xl px-4 py-2 shadow-lg focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              ></motion.textarea>

              <div className="mt-2 bg-[#D9D9D9] flex space-x-4">
                  <Link
                    to="/generator-step-2"
                    className="bg-[#6A3A9F] text-white rounded-lg py-2 px-4 hover:bg-purple-700 transition transition-transform transform hover:scale-105"
                  >
                    Next Step
                  </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Generator_Step_1;
