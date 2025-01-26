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

// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import Generator_Step_2 from "../components/Generator_Step_2.jsx";

// const Generator_Step_1 = () => {
//   return (
//     <>
//       <div className="mx-4 mt-16">
//         <motion.div
//           className="min-h-screen white"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <motion.div
//             className="bg-white w-full h-full"
//             initial={{ y: -50 }}
//             animate={{ y: 0 }}
//             transition={{ type: "spring", stiffness: 100 }}
//           >
//             <div className="p-6 space-y-4 bg-[#D9D9D9] rounded-3xl">
//               <motion.h1
//                 className="text-xl md:text-2xl font-semibold text-[#6A3A9F] bg-[#D9D9D9]"
//                 style={{ fontFamily: "'Caveat', cursive" }}
//                 initial={{ scale: 0.8 }}
//                 animate={{ scale: 1 }}
//                 transition={{ type: "spring", stiffness: 100 }}
//               >
//                 AI Video Generator
//               </motion.h1>
//               <p className="text-gray-600 text-sm md:text-base bg-[#D9D9D9]">
//                 Step 1: Generate a Script using Generative AI by describing
//                 what you want to see.
//               </p>
//               <motion.input
//                 type="text"
//                 placeholder="What script do you want to generate?"
//                 className="w-full border border-gray-300 rounded-2xl px-4 py-2 shadow-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
//                 initial={{ x: -100 }}
//                 animate={{ x: 0 }}
//                 transition={{ type: "spring", stiffness: 120 }}
//               />
//               <motion.button
//                 className="bg-[#6A3A9F] text-white rounded-lg py-2 px-4 hover:bg-purple-700 transition transition-transform transform hover:scale-105"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 Generate
//               </motion.button>
//               <motion.textarea
//                 placeholder="Result"
//                 rows="10"
//                 className="w-full border border-gray-300 rounded-2xl px-4 py-2 shadow-lg focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.6 }}
//               ></motion.textarea>

//               <div className="mt-2 bg-[#D9D9D9] flex space-x-4">
//                   <Link
//                     to="/generator-step-2"
//                     className="bg-[#6A3A9F] text-white rounded-lg py-2 px-4 hover:bg-purple-700 transition transition-transform transform hover:scale-105"
//                   >
//                     Next Step
//                   </Link>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </>
//   );
// };

// export default Generator_Step_1;

// integration
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Generator_Step_2 from "../components/Generator_Step_2.jsx";

const Generator_Step_1 = () => {
  const [inputText, setInputText] = useState(""); // For managing input text
  const [result, setResult] = useState(""); // For managing API response
  const [isLoading, setIsLoading] = useState(false); // For managing loading state

  // Function to handle API call
  const handleGenerate = async () => {
    console.log(inputText);
    if (!inputText.trim()) {
      alert("Please enter a topic to generate the script!");
      return;
    }
    setIsLoading(true);
    try {
      // Example API call (replace with your actual endpoint)
      const response = await fetch("http://localhost:3000/generate-script", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic: inputText }),
      });
      const data = await response.json();
      // Store data.story in localStorage
      if (data.story) {
        localStorage.setItem("generatedScript", data.story);
      }
      setResult(data.story || "No script generated."); // Update result
      console.log(data.story);
    } catch (error) {
      console.error("Error generating script:", error);
      setResult("Failed to generate script. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

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
                Step 1: Generate a Script using Generative AI by describing what
                you want to see.
              </p>
              <motion.input
                type="text"
                placeholder="What script do you want to generate?"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full border border-gray-300 rounded-2xl px-4 py-2 shadow-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 120 }}
              />
              <motion.button
                onClick={handleGenerate}
                className="bg-[#6A3A9F] text-white rounded-lg py-2 px-4 hover:bg-purple-700 transition transition-transform transform hover:scale-105"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                disabled={isLoading}
              >
                {isLoading ? "Generating..." : "Generate"}
              </motion.button>
              <motion.textarea
                placeholder="Result"
                rows="10"
                value={result}
                readOnly
                className="w-full border border-gray-300 rounded-2xl px-4 py-2 shadow-lg focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              ></motion.textarea>

              <div className="mt-2 bg-[#D9D9D9] flex space-x-4">
                <Link
                  to={{
                    pathname: "/generator-step-2",
                    // state: { story: data.story }, // Pass the story here
                  }}
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
