import React, { useState, useEffect } from "react";
import { BaseUrl } from "../src/utils/BaseUrls";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import QRModal from "./QRModal";
import { QRCodeCanvas } from "qrcode.react";

export default function Generator_Step_5() {
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [localData, setLocalData] = useState({});
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

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
      let value = localStorage.getItem(key) || "N/A";

      // Parse JSON if the key is image_urls or audio_urls and value is not "N/A"
      if (
        ["image_urls", "audio_urls"].includes(actualKeys[index]) &&
        value !== "N/A"
      ) {
        try {
          value = JSON.parse(value);
        } catch (error) {
          console.error(`Error parsing ${actualKeys[index]}:`, error);
          value = [];
        }
      }

      storedData[actualKeys[index]] = value;
    });

    setLocalData(storedData);
  }, []);

  const copyURL = () => {
    navigator.clipboard.writeText(videoUrl)
      .then(() => alert("URL copied to clipboard!"))
      .catch((err) => console.error("Failed to copy URL: ", err));
  };

  const downloadVideo = async (videoURL, fileName = "video.mp4") => {
    try {
      const response = await fetch(videoURL);
      const blob = await response.blob();

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileName;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(link.href); // Free memory
    } catch (error) {
      console.error("Error downloading video:", error);
    }
  };

  const handleGenerate = async () => {
    setLoading(true);
    setVideoUrl(null); // Reset previous video
    setSuccessMessage(false); ///////////////////////////////
    setIsDataFetched(false); // Reset fetched state

    const requestBody = {
      ...localData,
    };

    try {
      setIsGenerated(false);
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
        setIsDataFetched(true); // Enable the button after fetching
        setIsGenerated(true);
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
              <div className="flex items-center justify-center bg-[#D9D9D9]">
                <div className="flex flex-col items-center bg-[#D9D9D9]">
                  <div className="p-6 w-256 h-256 border-2 border-gray-400 flex items-center justify-center bg-[#D9D9D9]">
                    {loading ? (
                      // <div className="w-256 h-256 animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
                      <div className="w-12 h-12 animate-spin rounded-full border-4 border-[#6A3A9F] border-t-transparent bg-[#D9D9D9]"></div>
                    ) : videoUrl ? (
                      <video className="w-256 h-256" controls>
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div className="p-6 text-gray-600 bg-[#D9D9D9] w-256 h-256">
                        Preview
                      </div>
                    )}
                  </div>

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

                  <div className="flex bg-inherit justify-evenly w-[600px]">
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

                    {isGenerated &&
                      <motion.button
                        onClick={() => setModalOpen(true)}
                        className="mt-5 bg-[#6A3A9F] text-white rounded-lg py-2 px-4 hover:bg-purple-700 transition transition-transform transform hover:scale-105"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      // disabled={loading}
                      >
                        QR code
                      </motion.button>
                    }
  
                    {isGenerated &&
                    <motion.button
                      onClick={copyURL}
                      className="mt-5 bg-[#6A3A9F] text-white rounded-lg py-2 px-4 hover:bg-purple-700 transition transition-transform transform hover:scale-105"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      disabled={loading}
                    >
                      Copy Url
                    </motion.button>}

                    {isGenerated &&
                      <motion.button
                        onClick={downloadVideo}
                        className="mt-5 bg-[#6A3A9F] text-white rounded-lg py-2 px-4 hover:bg-purple-700 transition transition-transform transform hover:scale-105"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      // disabled={loading}
                      >
                        Download
                      </motion.button>
                    }
                  </div>

                  {/* {isGenerated &&
                    <div className="flex bg-inherit justify-evenly w-[300px]">
                      <motion.button
                        onClick={copyURL}
                        className="mt-5 bg-[#6A3A9F] text-white rounded-lg py-2 px-4 hover:bg-purple-700 transition transition-transform transform hover:scale-105"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        disabled={loading}
                      >
                        Copy Url
                      </motion.button>

                      {isGenerated &&
                        <motion.button
                          onClick={downloadVideo}
                          className="mt-5 bg-[#6A3A9F] text-white rounded-lg py-2 px-4 hover:bg-purple-700 transition transition-transform transform hover:scale-105"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        // disabled={loading}
                        >
                          Download
                        </motion.button>
                      }
                    </div>
                  } */}


                  {/* modal section */}
                  <QRModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                    <h2 className="text-lg font-bold">QR code for video</h2>
                    <QRCodeCanvas value={videoUrl} size={400} />
                  </QRModal>

                  <Link
                    to="/"
                    className={`mt-2 bg-[#6A3A9F] text-white rounded-lg py-2 px-4 hover:bg-purple-700 transition transition-transform transform hover:scale-105 ${!isDataFetched
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-purple-700 hover:scale-105"
                      }`}
                    style={{ pointerEvents: !isDataFetched ? "none" : "auto" }}
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
