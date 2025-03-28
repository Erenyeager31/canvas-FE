// import React, { useState } from "react";

// const VideoSettings = () => {
//   // const [selectedDuration, setSelectedDuration] = useState("15s");
//   // const [selectedFrameRate, setSelectedFrameRate] = useState("0.2 fps");
//   // const [selectedAudio, setSelectedAudio] = useState("None");
//   // const [selectedTextOverlay, setSelectedTextOverlay] = useState("None");
//   const [selectedLanguage, setSelectedLanguage] = useState("English");
//   const [selectedAudioLanguage, setSelectedAudioLanguage] = useState("English");

//   // const durations = ["15s", "30s", "45s", "1m", "1.5m", "2m"];
//   // const frameRates = ["0.2 fps", "0.5 fps", "1 fps", "2 fps"];
//   // const audioOptions = ["Background Music", "Narration", "None"];
//   // const textOverlays = ["Caption/Subtitles", "None"];
//   const languages = ["English", "Hindi"];
//   const Audiolanguages = ["English", "Hindi"];

//   return (
//     <>
//       <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
//         <div className="space-y-6">
//           {/* Duration */}
//           {/* <div>
//             <h2 className="text-lg font-semibold mb-2 text-[#6A3A9F]">Approximate Duration:</h2>
//             <div className="flex flex-wrap gap-3">
//               {durations.map((duration) => (
//                 <button
//                   key={duration}
//                   onClick={() => setSelectedDuration(duration)}
//                   className={`px-4 py-2 rounded-lg transition-transform transform hover:scale-110 ${
//                     selectedDuration === duration
//                       ? "bg-[#6A3A9F] text-white"
//                       : "bg-gray-200 text-gray-700"
//                   }`}
//                 >
//                   {duration}
//                 </button>
//               ))}
//             </div>
//           </div> */}

//           {/* Frame Rate */}
//           {/* <div>
//             <h2 className="text-lg font-semibold mb-2 text-[#6A3A9F]">Frame Rate:</h2>
//             <div className="flex flex-wrap gap-3">
//               {frameRates.map((rate) => (
//                 <button
//                   key={rate}
//                   onClick={() => setSelectedFrameRate(rate)}
//                   className={`px-4 py-2 rounded-lg transition-transform transform hover:scale-110 ${
//                     selectedFrameRate === rate
//                       ? "bg-[#6A3A9F] text-white"
//                       : "bg-gray-200 text-gray-700"
//                   }`}
//                 >
//                   {rate}
//                 </button>
//               ))}
//             </div>
//           </div> */}

//           {/* Audio */}
//           {/* <div>
//             <h2 className="text-lg font-semibold mb-2 text-[#6A3A9F]">Audio:</h2>
//             <div className="flex flex-wrap gap-3">
//               {audioOptions.map((audio) => (
//                 <button
//                   key={audio}
//                   onClick={() => setSelectedAudio(audio)}
//                   className={`px-4 py-2 rounded-lg transition-transform transform hover:scale-110 ${
//                     selectedAudio === audio
//                       ? "bg-[#6A3A9F] text-white"
//                       : "bg-gray-200 text-gray-700"
//                   }`}
//                 >
//                   {audio}
//                 </button>
//               ))}
//             </div>
//           </div> */}

//           {/* Text Overlay */}
//           {/* <div>
//             <h2 className="text-lg font-semibold mb-2 text-[#6A3A9F]">Text overlay:</h2>
//             <div className="flex flex-wrap gap-3">
//               {textOverlays.map((overlay) => (
//                 <button
//                   key={overlay}
//                   onClick={() => setSelectedTextOverlay(overlay)}
//                   className={`px-4 py-2 rounded-lg transition-transform transform hover:scale-110 ${
//                     selectedTextOverlay === overlay
//                       ? "bg-[#6A3A9F] text-white"
//                       : "bg-gray-200 text-gray-700"
//                   }`}
//                 >
//                   {overlay}
//                 </button>
//               ))}
//             </div>
//           </div> */}

//           {/* Caption Language */}
//           <div>
//             <h2 className="text-lg font-semibold mb-2 text-[#6A3A9F]">
//               Caption Language:
//             </h2>
//             <div className="flex flex-wrap gap-3">
//               {languages.map((lang) => (
//                 <button
//                   key={lang}
//                   onClick={() => setSelectedLanguage(lang)}
//                   className={`px-4 py-2 rounded-lg transition-transform transform hover:scale-110 ${
//                     selectedLanguage === lang
//                       ? "bg-[#6A3A9F] text-white"
//                       : "bg-gray-200 text-gray-700"
//                   }`}
//                 >
//                   {lang}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Audio Langyage */}
//           <div>
//             <h2 className="text-lg font-semibold mb-2 text-[#6A3A9F]">
//               Audio Language:
//             </h2>
//             <div className="flex flex-wrap gap-3">
//               {Audiolanguages.map((Alang) => (
//                 <button
//                   key={Alang}
//                   onClick={() => setSelectedAudioLanguage(Alang)}
//                   className={`px-4 py-2 rounded-lg transition-transform transform hover:scale-110 ${
//                     selectedAudioLanguage === Alang
//                       ? "bg-[#6A3A9F] text-white"
//                       : "bg-gray-200 text-gray-700"
//                   }`}
//                 >
//                   {Alang}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default VideoSettings;

import React, { useState, useEffect } from "react";

const VideoSettings = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    // Initialize state from localStorage or default to "English"
    return localStorage.getItem("selected_caption_lang") || "en";
  });

  const [selectedAudioLanguage, setSelectedAudioLanguage] = useState(() => {
    // Initialize state from localStorage or default to "English"
    return localStorage.getItem("selected_audio_lang") || "en";
  });

  const languages = [
    { lang: "English", value: "en" },
    { lang: "Hindi", value: "hi" },
  ];
  const Audiolanguages = [
    { lang: "English", value: "en" },
    { lang: "Hindi", value: "hi" },
  ];

  useEffect(() => {
    languages.map((l) => {
      console.log(l);
    });
  }, []);

  // Update localStorage when caption language changes
  useEffect(() => {
    localStorage.setItem("selected_caption_lang", selectedLanguage);
  }, [selectedLanguage]);

  // Update localStorage when audio language changes
  useEffect(() => {
    localStorage.setItem("selected_audio_lang", selectedAudioLanguage);
  }, [selectedAudioLanguage]);

  return (
    <>
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
        <div className="space-y-6">
          {/* Caption Language */}
          <div>
            <h2 className="text-lg font-semibold mb-2 text-[#6A3A9F]">
              Caption Language:
            </h2>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <button
                  key={lang.value}
                  onClick={() => setSelectedLanguage(lang.value)}
                  className={`px-4 py-2 rounded-lg transition-transform transform hover:scale-110 ${
                    selectedLanguage === lang.value
                      ? "bg-[#6A3A9F] text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {lang.lang}
                </button>
              ))}
            </div>
          </div>

          {/* Audio Language */}
          <div>
            <h2 className="text-lg font-semibold mb-2 text-[#6A3A9F]">
              Audio Language:
            </h2>
            <div className="flex flex-wrap gap-3">
              {Audiolanguages.map((Alang) => (
                <button
                  key={Alang.value}
                  onClick={() => setSelectedAudioLanguage(Alang.value)}
                  className={`px-4 py-2 rounded-lg transition-transform transform hover:scale-110 ${
                    selectedAudioLanguage === Alang.value
                      ? "bg-[#6A3A9F] text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {Alang.lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSettings;
