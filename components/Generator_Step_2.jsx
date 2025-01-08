// import React from "react";
// import VideoSettings from "../components/VideoSettings.jsx";
// import { Link } from "react-router-dom";
// const Generator_Step_2 = () => {
//   return (
//     <>
//       <div className=" mx-4 mt-6">
//         <div className="min-h-screen white">
//           <div className="bg-white w-full h-full">
//             <div className="p-6 space-y-4 bg-[#D9D9D9] rounded-3xl">
//               <h1
//                 className="text-xl md:text-2xl font-semibold text-[#6A3A9F] bg-[#D9D9D9]"
//                 style={{ fontFamily: "'Caveat', cursive" }}
//               >
//                 AI Video Generator
//               </h1>
//               <p className="text-gray-600 text-sm md:text-base bg-[#D9D9D9]">
//                 Step 2 : Select the configuration for the final output
//               </p>
//               <textarea
//                 placeholder="Script (prefilled)"
//                 rows="10"
//                 className="w-full border border-gray-300 rounded-2xl px-4 py-2 shadow-lg focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"
//               ></textarea>

//               <p className="text-gray-600 text-sm md:text-base bg-[#D9D9D9]">
//                 Please select from the following options for generating video :
//               </p>
//               <VideoSettings></VideoSettings>
//               <div className="mt-2 bg-[#D9D9D9] flex space-x-4">
//               <Link to="/generator-step-3" className="bg-[#6A3A9F] text-white rounded-lg py-2 px-4 hover:bg-purple-700 transition transition-transform transform hover:scale-105 ">
//                 Next Step
//               </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-2"></div>
//     </>
//   );
// };

// export default Generator_Step_2;














// code with animation



import React from "react";
import { motion } from "framer-motion";
import VideoSettings from "../components/VideoSettings.jsx";
import { Link } from "react-router-dom";

const Generator_Step_2 = () => {
  return (
    <>
      <div className="mx-4 mt-6">
        <motion.div
          className="min-h-screen white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="bg-white w-full h-full bg-[#D9D9D9]"
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
                Step 2 : Select the configuration for the final output
              </p>
              <motion.textarea
                placeholder="Script (prefilled)"
                rows="10"
                className="w-full border border-gray-300 rounded-2xl px-4 py-2 shadow-lg focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              ></motion.textarea>

              <p className="text-gray-600 text-sm md:text-base bg-[#D9D9D9]">
                Please select from the following options for generating video :
              </p>
              <motion.div
                className="bg-[#D9D9D9]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <VideoSettings />
              </motion.div>
              <div className="mt-2 bg-[#D9D9D9] flex space-x-4">
                  <Link
                    to="/generator-step-3"
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

export default Generator_Step_2;
