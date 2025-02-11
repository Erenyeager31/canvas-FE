import React, { useState, useEffect } from "react";
import { BaseUrl } from "../src/utils/BaseUrls";
import { motion } from "framer-motion";

export default function Generator_Step_5() {
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [localData, setLocalData] = useState({});

  // Load 4 keys from localStorage on first render
  useEffect(() => {
    const keys = ["generatedScript", "image_urls", "generated_audio_for_video", "selected_caption_lang"];
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

    const requestBody = {
      ...localData
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
    <div className="flex flex-col items-center mt-5">
      <div className="w-256 h-256 bg-gray-200 border-2 border-gray-400 flex items-center justify-center">
        {loading ? (
          <div className="w-256 h-256 animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
        ) : videoUrl ? (
          <video className="w-256 h-256" controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="text-gray-600 w-256 h-256">Preview</div>
        )}
      </div>

      <motion.button
        onClick={handleGenerate}
        className="bg-[#6A3A9F] text-white rounded-lg py-2 px-4 hover:bg-purple-700 transition transition-transform transform hover:scale-105"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate"}
      </motion.button>
    </div>
  );
}
