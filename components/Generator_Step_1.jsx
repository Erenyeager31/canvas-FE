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

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BaseUrl } from "../src/utils/BaseUrls.js";
import uploadFile from "../src/utils/cloudinaryUploader.js";
// import Generator_Step_2 from "../components/Generator_Step_2.jsx";

const Generator_Step_1 = () => {
  localStorage.clear();
  const [inputText, setInputText] = useState(""); // For managing input text
  const [result, setResult] = useState(""); // For managing API response
  const [isLoading, setIsLoading] = useState(false); // For managing loading state
  const [isActive, setIsActive] = useState(false);
  const [fileURL, setURL] = useState(null);
  const [style_guide, setStyleGuide] = useState("Cinematic");
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const options = ["Historical",
    "Biography",
    "Cinematic"];

  const handleSelect = (option) => {
    setStyleGuide(option);
    setIsOpen(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      // setSelectedFile(file);
      handleFileUpload(file);
    }
  };

  const toggleRadio = () => {
    setURL(null)
    setIsActive(prevState => !prevState)
  }

  const handleFileUpload = async (file) => {
    try {
      const url = await uploadFile(file)
      setURL(url)
      alert("File Uploaded Successfully !")

      console.log("Upload successful");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  // Function to handle API call
  const handleGenerate = async () => {
    if (isActive) {
      if (fileURL == null) {
        alert("Please upload a file or toggle the uploader");
      }
    }
    console.log(inputText);
    if (!inputText.trim()) {
      alert("Please enter a topic to generate the script!");
      return;
    }
    setIsLoading(true);

    const payload = { topic: `${inputText}#${style_guide}`, userDocURL: fileURL }
    console.log(payload)
    setURL(null)

    sessionStorage.setItem("style_guide",style_guide);

    try {
      // Example API call (replace with your actual endpoint)
      const response = await fetch(`${BaseUrl}/api/newScript`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      // Store data.story in localStorage
      // if (data.generated_text) {
      //   localStorage.setItem("generatedScript", data.generated_text);
      // }
      setResult(data.generated_text || "No script generated."); // Update result
      if (data.generated_text) {
        setIsNextDisabled(false); // Enable Next Step once data is received
      }
      console.log(data)
      console.log(data.generated_text);
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
              {/* <motion.input
                type="text"
                placeholder="What script do you want to generate?"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full border border-gray-300 rounded-2xl px-4 py-2 shadow-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 120 }}
              />
             */}
              <div className="flex space-x-2 items-center bg-inherit">
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
                <div className="relative inline-block text-left w-full max-w-xs bg-inherit">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-4 py-2 bg-[#6A3A9F] text-white rounded-lg"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {style_guide || "Select a type"}
                  </motion.button>
                  {isOpen && (
                    <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg">
                      {options.map((option) => (
                        <motion.div
                          key={option}
                          whileHover={{ backgroundColor: "#6A3A9F", color: "white" }}
                          className="px-4 py-2 cursor-pointer"
                          onClick={() => handleSelect(option)}
                        >
                          {option}
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
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
              <div className="p-4 rounded-lg w-fit flex flex-col items-center justify-center shadow-md">
                {/* Toggle Switch */}
                <div className="w-[300px] flex justify-center align-middle">
                  <div
                    className="w-12 h-6 mr-[40px] bg-gray-300 rounded-full p-1 cursor-pointer relative flex items-center transition-all duration-300"
                    onClick={toggleRadio}
                  >
                    <div
                      className={`absolute w-4 h-4 bg-[#6A3A9F] rounded-full shadow-md transition-all duration-300 
                                ${isActive ? 'translate-x-6' : 'translate-x-0'}`}
                    />
                  </div>
                  <p className="text-center font-semibold bg-none">
                    {isActive ?
                      <p className="ml-[55px] text-green-600">Upload a document</p>
                      :
                      <p className="text-red-800">Toggle to upload document</p>}
                  </p>
                </div>

                {/* File Upload (Visible when Active) */}
                {isActive && (
                  <div className="mt-4 w-full flex justify-center">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="block w-full text-sm text-gray-500
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-lg file:border-0
                       file:text-sm file:font-semibold
                       file:bg-[#6A3A9F] file:text-white
                       hover:file:bg-purple-700 cursor-pointer"
                    />
                  </div>
                )}
              </div>
              <motion.textarea
                placeholder="Result"
                rows="10"
                value={result}
                onChange={(e) => setResult(e.target.value)} // Allow user to edit the result
                className="w-full border border-gray-300 rounded-2xl px-4 py-2 shadow-lg focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              ></motion.textarea>

              <div className="mt-2 bg-[#D9D9D9] flex space-x-4">
                <Link
                  to="/generator-step-2"
                  onClick={() => {
                    if (result.trim()) {
                      localStorage.setItem("generatedScript", result);
                    }
                  }}
                  className={`bg-[#6A3A9F] text-white rounded-lg py-2 px-4 hover:bg-purple-700 transition transition-transform transform hover:scale-105 ${isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  disabled={isNextDisabled}
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
