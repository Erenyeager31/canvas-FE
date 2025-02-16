import React, { useState, useEffect } from "react";
import { BaseUrl } from "../src/utils/BaseUrls";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Generator_Step_5() {
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [localData, setLocalData] = useState({});
  const [successMessage, setSuccessMessage] = useState(false); /////////////////////////////

  // Load 4 keys from localStorage on first render
  useEffect(() => {
    const keys = [
      "generatedScript",
      "image_urls",
      "generated_audio_for_video",
      "selected_caption_lang",
    ];
    const actualKeys = ["story", "image_urls", "audio_urls", "caption_lang"];

    let storedData = {};

    keys.forEach((key, index) => {
      storedData[actualKeys[index]] = localStorage.getItem(key) || "N/A";
    });

    setLocalData(storedData);
  }, []);

  const handleGenerate = async () => {
    setLoading(true);
    setVideoUrl(null); // Reset previous video
    setSuccessMessage(false); ///////////////////////////////

    const requestBody = {
      ...localData,
    };

    try {
      const response = await fetch(`${BaseUrl}/api/genVideo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      if (data.url) {
        setVideoUrl(data.url);
        setSuccessMessage(true); ///////////////////////////////////
      } else {
        console.error("Invalid response:", data);
      }
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mx-4 mt-4">
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
                Step 5 : Just one more click to generate vedio
              </p>
              <div className="flex items-center justify-center  bg-[#D9D9D9]">
                <div className="flex flex-col items-center bg-[#D9D9D9]">
                  <div className="w-256 h-256 bg-gray-200 border-2 border-gray-400 flex items-center justify-center">
                    {loading ? (
                      <div className="w-256 h-256 animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
                    ) : videoUrl ? (
                      <video className="w-256 h-256" controls>
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div className="text-gray-600  bg-[#D9D9D9] w-256 h-256">Preview</div>
                    )}
                  </div>
                  {/* {successMessage && (
                    <motion.div
                      className="mt-5 text-green-600 font-bold text-lg bg-[#D9D9D9]"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, type: "spring" }}
                    >
                      🎉 Congratulations! Video generated successfully!
                    </motion.div>
                  )} */}

                  {successMessage && (
                    <motion.div
                      className="mt-5 text-green-600 font-bold text-lg bg-[#D9D9D9] p-5 rounded-lg shadow-xl"
                      initial={{ opacity: 0, scale: 0.8, y: -30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        type: "spring",
                        bounce: 0.5,
                      }}
                    >
                      {/* Subtle Floating Animation */}
                      <motion.div
                        className="bg-[#D9D9D9]"
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.8,
                          ease: "easeInOut",
                        }}
                      >
                        {/* Letter-by-letter Text Reveal Animation */}
                        {"🎉 Congratulations! Video generated successfully!"
                          .split("")
                          .map((char, index) => (
                            <motion.span
                              className="bg-[#D9D9D9]"
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.05,
                                delay: index * 0.05,
                              }}
                            >
                              {char}
                            </motion.span>
                          ))}
                      </motion.div>
                    </motion.div>
                  )}

                  <motion.button
                    onClick={handleGenerate}
                    className="mt-5 bg-[#6A3A9F] text-white rounded-lg py-2 px-4 hover:bg-purple-700 transition transition-transform transform hover:scale-105"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    disabled={loading}
                  >
                    {loading ? "Generating..." : "Generate"}
                  </motion.button>

                  <Link
                    to="/"
                    className="mt-2 bg-[#6A3A9F] text-white rounded-lg py-2 px-4 hover:bg-purple-700 transition transition-transform transform hover:scale-105"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="mt-2"></div>
    </>
  );
}
