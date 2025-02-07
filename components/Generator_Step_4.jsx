// import React from "react";
// import Video_Cards from "../components/Video_Cards.jsx";
// import Audio_Cards from "../components/Audio_Cards.jsx";
// import { Link } from "react-router-dom";
// const Generator_Step_4 = () => {
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
//               Step 4 : Generate audio for the Generated Video
//               </p>
//               <Video_Cards></Video_Cards>

//               <button className="bg-[#6A3A9F] text-white rounded-lg py-2 px-4 hover:bg-purple-700 transition transition-transform transform hover:scale-105 ">
//                 Generate
//               </button>
//               <p className="text-gray-600 text-sm md:text-base bg-[#D9D9D9]">
//               Generated Audio Samples :
//               </p>
//               <Audio_Cards></Audio_Cards>
//               <div className="mt-2 bg-[#D9D9D9] flex space-x-4">
//               <Link to="/" className="bg-[#6A3A9F] text-white rounded-lg py-2 px-4 hover:bg-purple-700 transition transition-transform transform hover:scale-105 ">
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

// export default Generator_Step_4;

// code with animation

import {React,useEffect,useState} from "react";
import { motion } from "framer-motion";
import Video_Cards from "../components/Video_Cards.jsx";
import Audio_Cards from "../components/Audio_Cards.jsx";
import Generated_Audio_cards from "../components/Generated_Audio_cards.jsx";
import { Link } from "react-router-dom";
import { BaseUrl } from "../src/utils/BaseUrls.js";

const Generator_Step_4 = () => {
  const [loading, setLoading] = useState(false);
  const [showGeneratedAudio, setShowGeneratedAudio] = useState(false);
  const [generatedAudioData, setGeneratedAudioData] = useState(null);
  
  useEffect(() => {
    // Check if there's existing generated audio data
    const existingAudioData = localStorage.getItem("generated_audio_for_video");
    if (existingAudioData) {
      setGeneratedAudioData(JSON.parse(existingAudioData));
      setShowGeneratedAudio(true);
    }
  }, [localStorage]);

  const handleGenerateAudio = async () => {
    setLoading(true);
    try {
      const generatedScript = localStorage.getItem("generatedScript");
      const selectedAudioLang = localStorage.getItem("selected_audio_lang");
      const selectedAudioSample = localStorage.getItem("selected_audio_sample");

      if (!generatedScript || !selectedAudioLang || !selectedAudioSample) {
        console.error("Missing input data from localStorage");
        setLoading(false);
        return;
      }

      const requestBody = {
        texts: generatedScript,
        url: selectedAudioSample,
        lang: selectedAudioLang,
      };

      console.log("Inside request :",requestBody)

      const response = await fetch(`${BaseUrl}/api/genAudio`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Failed to generate audio");
      }

      const responseData = await response.json();
      localStorage.setItem("generated_audio_for_video", JSON.stringify(responseData));
      console.log("Audio generated successfully:", responseData);
    } catch (error) {
      console.error("Error generating audio:", error);
    } finally {
      setLoading(false);
    }
  };
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
                Step 4 : Generate audio for the Generating Video
              </p>

              {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Video_Cards />
              </motion.div> */}

              <p className="text-gray-600 text-sm md:text-base bg-[#D9D9D9]">
                Audio Samples :
              </p>

              <motion.div
                className="bg-[#D9D9D9]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Audio_Cards />
              </motion.div>

              <motion.button
              onClick={handleGenerateAudio}
                className="bg-[#6A3A9F] text-white rounded-lg py-2 px-4 hover:bg-purple-700 transition transition-transform transform hover:scale-105"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                disabled={loading}
              >
                {loading ? "Generating..." : "Generate"}
              </motion.button>

                <Generated_Audio_cards audioData={generatedAudioData}/>

              <div className="mt-2 bg-[#D9D9D9] flex space-x-4">
                <Link
                  to="/"
                  className="bg-[#6A3A9F] text-white rounded-lg py-2 px-4 hover:bg-purple-700 transition transition-transform transform hover:scale-105"
                >
                  Next Step
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-2"></div>
    </>
  );
};

export default Generator_Step_4;
