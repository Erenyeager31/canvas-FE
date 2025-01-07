import React from "react";
import Video_Cards from "../components/Video_Cards.jsx";
import Audio_Cards from "../components/Audio_Cards.jsx";
import { Link } from "react-router-dom";
const Generator_Step_4 = () => {
  return (
    <>
      <div className=" mx-4 mt-6">
        <div className="min-h-screen white">
          <div className="bg-white w-full h-full">
            <div className="p-6 space-y-4 bg-[#D9D9D9] rounded-3xl">
              <h1
                className="text-xl md:text-2xl font-semibold text-[#6A3A9F] bg-[#D9D9D9]"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                AI Video Generator
              </h1>
              <p className="text-gray-600 text-sm md:text-base bg-[#D9D9D9]">
              Step 4 : Generate audio for the Generated Video
              </p>
              <Video_Cards></Video_Cards>

              <button className="bg-[#6A3A9F] text-white rounded-lg py-2 px-4 hover:bg-purple-700 transition transition-transform transform hover:scale-105 ">
                Generate
              </button>
              <p className="text-gray-600 text-sm md:text-base bg-[#D9D9D9]">
              Generated Audio Samples :
              </p>
              <Audio_Cards></Audio_Cards>
              <div className="mt-2 bg-[#D9D9D9] flex space-x-4">
              <Link to="/" className="bg-[#6A3A9F] text-white rounded-lg py-2 px-4 hover:bg-purple-700 transition transition-transform transform hover:scale-105 ">
                Next Step
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2"></div>
    </>
  );
};

export default Generator_Step_4;
