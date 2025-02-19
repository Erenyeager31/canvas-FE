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
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer.jsx";
import WordCloud from "react-d3-cloud";
import { BaseUrl } from "../src/utils/BaseUrls.js";
import './CSS/wordcloud.css'

const Home = () => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWords();
  }, []);

  async function getWords() {
    setLoading(true);

    const sessionData = JSON.parse(sessionStorage.getItem("wordCloud"))
    console.log(sessionData)

    if (
      sessionData?.['wordslist'].length !== 0 && 
      sessionData?.['timestamp'] && 
      (Date.now() - new Date(sessionData['timestamp']).getTime() <= 2 * 24 * 60 * 60 * 1000)
    ) {
      setWords(sessionData['wordslist'])
      setLoading(false);
      return;
    }
    

    try {
      const response = await fetch(`${BaseUrl}/api/getWords`, {
        method: "GET",
      });

      const requestJson = await response.json();

      sessionStorage.setItem("topics",requestJson.fileList)

      // Better word value calculation to ensure proper distribution
      const wordslist = requestJson.fileList.map((item, index) => {
        // Base value on both length and position to ensure variation
        const baseValue = Math.max(item.length * 8, 30);
        // Add randomization factor to prevent words having identical values
        const randomFactor = Math.random() * 30 - 15; // -15 to +15
        return {
          text: item,
          value: baseValue + randomFactor,
        };
      });

      // Sort by value to ensure important words get priority in layout
      wordslist.sort((a, b) => b.value - a.value);

      setWords(wordslist);

      sessionStorage.setItem("wordCloud", JSON.stringify({
        "wordslist": wordslist,
        "timestamp": new Date().toLocaleString() // Saves date and time in readable format
      }));

    } catch (error) {
      console.error("Error fetching words:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      const textElements = document.querySelectorAll('text[text-anchor]');
      textElements.forEach(el => {
        el.classList.add('word-cloud-text');
      });
    }, 500);
    const svg = document.querySelector("svg"); // Select the first SVG in the DOM
    if (svg) {
      svg.style.background = "black"; // Set black background
    }
  }, [words]);


  // Carefully tuned size function to ensure good distribution
  const fontSizeMapper = (word) => {
    const baseSize = Math.log2(word.value) * 10;
    // Scale based on position to ensure variety
    const positionInArray = words.findIndex(w => w.text === word.text);
    const positionFactor = Math.max(1 - (positionInArray / words.length), 0.4);
    return Math.max(baseSize * positionFactor, 8);
  };

  // Rotation function that varies based on word position and value
  const rotate = (word) => {
    const positionInArray = words.findIndex(w => w.text === word.text);
    // More words horizontal at beginning, more rotated later in the list
    if (positionInArray < words.length * 0.3) {
      return 0; // First 30% mostly horizontal
    } else if (positionInArray > words.length * 0.7) {
      return 90; // Last 30% mostly vertical
    } else {
      return word.value % 2 === 0 ? 0 : 90; // Mix in the middle
    }
  };

  return (
    <>
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between px-4 min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="text-center md:w-1/2 flex flex-col justify-center h-full"
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
          className="md:w-1/2 h-76 flex justify-center items-center z-[0] bg-black"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {loading ? (
            <div className="text-lg text-gray-500">Loading word cloud...</div>
          ) : words.length > 0 ? (
            <div className="w-full h-full relative bg-[black]">
              <WordCloud
                data={words}
                fontSizeMapper={fontSizeMapper}
                rotate={rotate}
                padding={2}
                font="Impact"
                random={() => 0.5}
                spiral="archimedean"
                fill={(d, i) => {
                  const positionInArray = words.findIndex(w => w.text === d.text);
                  const positionRatio = positionInArray / words.length;
                  return `hsl(${(positionInArray * 360) / words.length % 360}, 
                      ${80 - positionRatio * 30}%, 
                      ${60 - positionRatio * 20}%)`;
                }}
                width={800}
                height={550}
                fontSize={20}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  overflow: "visible",
                  backgroundColor: "black",
                }}
              />
            </div>
          ) : (
            <img src={image} alt="Video generation" className="w-128 max-h-[80vh]" />
          )}
        </motion.div>;


      </motion.div>

      <Footer />
    </>
  );
};

export default Home;