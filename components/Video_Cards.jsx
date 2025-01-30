// import React from "react";

// const Video_Cards = () => {
//   return (
//     <>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full bg-[#D9D9D9] ">
//         {[1, 2, 3, 4].map((item) => (
//           <div
//             key={item}
//             className=" flex items-center justify-center bg-[#D9D9D9] rounded-3xl p-4 flex flex-col justify-between"
//           >
//             <div className="z-1relative h-[22rem] w-[20rem] border border-gray-300 rounded-3xl flex items-center justify-center shadow-lg">
//               {/* 3 dot icon */}
//               {/* <div className="absolute top-4 right-4 transition-transform transform hover:scale-150 z-10" >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 448 512"
//                   className="h-6 w-6 z-1"
//                 >
//                   <path
//                     fill="#6a3a9f"
//                     d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
//                   />
//                 </svg>
//               </div> */}
              
//               {/* Add any content like an image or a video preview here */}
//               <span className="text-gray-400">Preview Area</span>
//             </div>

//             <div className="w-[20rem] mt-4 bg-[#6A3A9F] text-white text-sm rounded-md p-2 text-center">
//               <p className="bg-[#6A3A9F]">
//                 Lorem ipsum odor amet, consectetuer adipiscing elit. Varius
//                 etiam pulvinar
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Video_Cards;








// import React, { useState } from "react";

// const Video_Cards = ({ items = [] }) => {
//   const [startIndex, setStartIndex] = useState(0);
//   const itemsPerPage = 4;

//   const handleNext = () => {
//     if (startIndex + itemsPerPage < items.length) {
//       setStartIndex(startIndex + itemsPerPage);
//     }
//   };

//   const handlePrev = () => {
//     if (startIndex - itemsPerPage >= 0) {
//       setStartIndex(startIndex - itemsPerPage);
//     }
//   };

//   return (
//     <div className="w-full bg-[#D9D9D9] p-6">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {(items.length > 0 ? items.slice(startIndex, startIndex + itemsPerPage) : []).map((item, index) => (
//           <div
//             key={index}
//             className="flex items-center justify-center bg-[#D9D9D9] rounded-3xl p-4 flex-col"
//           >
//             <div className="relative h-[22rem] w-[20rem] border border-gray-300 rounded-3xl flex items-center justify-center shadow-lg">
//               <span className="text-gray-400">{item.previewText || "Preview Area"}</span>
//             </div>
//             <div className="w-[20rem] mt-4 bg-[#6A3A9F] text-white text-sm rounded-md p-2 text-center">
//               <p>{item.description || "Default Description"}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-between mt-6">
//         <button
//           onClick={handlePrev}
//           disabled={startIndex === 0}
//           className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={startIndex + itemsPerPage >= items.length}
//           className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Video_Cards;











// import React, { useState } from "react";

// const Video_Cards = ({ items = ["","","","","",""] }) => {
//   const [startIndex, setStartIndex] = useState(0);
//   const itemsPerPage = 4;

//   const handleNext = () => {
//     if (startIndex + itemsPerPage < items.length) {
//       setStartIndex(startIndex + itemsPerPage);
//     }
//   };

//   const handlePrev = () => {
//     if (startIndex - itemsPerPage >= 0) {
//       setStartIndex(startIndex - itemsPerPage);
//     }
//   };

//   return (
//     <div className="w-full bg-[#D9D9D9] p-6">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#D9D9D9]">
//         {(items.length > 0 ? items.slice(startIndex, startIndex + itemsPerPage) : []).map((item, index) => (
//           <div
//             key={index}
//             className="flex items-center justify-center bg-[#D9D9D9] rounded-3xl p-4 flex-col"
//           >
//             <div className="relative h-[22rem] w-[20rem] border border-gray-300 rounded-3xl flex items-center justify-center shadow-lg overflow-hidden">
//               <img 
//                 src={item.imageUrl || "default image"} 
//                 alt="Preview" 
//                 className="h-full w-full object-cover rounded-3xl"
//               />
//             </div>
//             <div className="w-[20rem] mt-4 bg-[#6A3A9F] text-white text-sm rounded-md p-2 text-center">
//               <p className="bg-[#6A3A9F]">{item.description || "Default Description"}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-between mt-6 bg-[#D9D9D9]">
//         <button
//           onClick={handlePrev}
//           disabled={startIndex === 0}
//           className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={startIndex + itemsPerPage >= items.length}
//           className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Video_Cards;










// import React, { useState, useEffect } from "react";
// // import fetch from "fetch";
// import { BaseUrl } from "../src/utils/BaseUrls";

// const Video_Cards = ({ items = [] }) => {
//   const [startIndex, setStartIndex] = useState(0);
//   const itemsPerPage = 4;
//   const [videoItems, setVideoItems] = useState([]);

//   useEffect(() => {
//     const fetchPrompts = async () => {
//       try {
//         const generatedScript = localStorage.getItem("generatedScript");
//         if (!generatedScript) return;

//         // First API Call: Send generatedScript and get prompts
//         const promptResponse = await fetch.post(`${BaseUrl}/api/prompts`, { story: generatedScript });
//         const prompts = promptResponse.data.prompts || [];
        
//         // Store prompts in localStorage
//         localStorage.setItem("videoPrompts", JSON.stringify(prompts));

//         // Second API Call: Send prompts to get generated images
//         const imageResponse = await fetch.post(`${BaseUrl}/api/genImage`, { prompts });
//         const images = imageResponse.data.images || [];

//         // Combine prompts and images
//         const updatedItems = prompts.map((desc, index) => ({
//           description: desc,
//           imageUrl: images[index] || "default image",
//         }));

//         setVideoItems(updatedItems);
//       } catch (error) {
//         console.error("Error fetching prompts or images:", error);
//       }
//     };

//     fetchPrompts();
//   }, []);

//   const handleNext = () => {
//     if (startIndex + itemsPerPage < videoItems.length) {
//       setStartIndex(startIndex + itemsPerPage);
//     }
//   };

//   const handlePrev = () => {
//     if (startIndex - itemsPerPage >= 0) {
//       setStartIndex(startIndex - itemsPerPage);
//     }
//   };

//   return (
//     <div className="w-full bg-[#D9D9D9] p-6">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#D9D9D9]">
//         {(videoItems.length > 0 ? videoItems.slice(startIndex, startIndex + itemsPerPage) : []).map((item, index) => (
//           <div
//             key={index}
//             className="flex items-center justify-center bg-[#D9D9D9] rounded-3xl p-4 flex-col"
//           >
//             <div className="relative h-[22rem] w-[20rem] border border-gray-300 rounded-3xl flex items-center justify-center shadow-lg overflow-hidden">
//               <img 
//                 src={item.imageUrl || "default image"} 
//                 alt="Preview" 
//                 className="h-full w-full object-cover rounded-3xl"
//               />
//             </div>
//             <div className="w-[20rem] mt-4 bg-[#6A3A9F] text-white text-sm rounded-md p-2 text-center">
//               <p className="bg-[#6A3A9F]">{item.description || "Default Description"}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-between mt-6 bg-[#D9D9D9]">
//         <button
//           onClick={handlePrev}
//           disabled={startIndex === 0}
//           className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={startIndex + itemsPerPage >= videoItems.length}
//           className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Video_Cards;













// import React, { useState } from "react";

// const Video_Cards = ({ videoItems = [] }) => {
//   const [startIndex, setStartIndex] = useState(0);
//   const itemsPerPage = 4;

//   const handleNext = () => {
//     if (startIndex + itemsPerPage < videoItems.length) {
//       setStartIndex(startIndex + itemsPerPage);
//     }
//   };

//   const handlePrev = () => {
//     if (startIndex - itemsPerPage >= 0) {
//       setStartIndex(startIndex - itemsPerPage);
//     }
//   };

//   return (
//     <div className="w-full bg-[#D9D9D9] p-6">
//       {videoItems.length === 0 ? (
//         <p className="text-center text-gray-500">No video items generated yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#D9D9D9]">
//           {videoItems.slice(startIndex, startIndex + itemsPerPage).map((item, index) => (
//             <div key={index} className="flex items-center justify-center bg-[#D9D9D9] rounded-3xl p-4 flex-col">
//               <div className="relative h-[22rem] w-[20rem] border border-gray-300 rounded-3xl flex items-center justify-center shadow-lg overflow-hidden">
//                 <img src={item.imageUrl || "default image"} alt="Preview" className="h-full w-full object-cover rounded-3xl" />
//               </div>
//               <div className="w-[20rem] mt-4 bg-[#6A3A9F] text-white text-sm rounded-md p-2 text-center">
//                 <p className="bg-[#6A3A9F]">{item.description || "Default Description"}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       <div className="flex justify-between mt-6 bg-[#D9D9D9]">
//         <button onClick={handlePrev} disabled={startIndex === 0} className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50">
//           Previous
//         </button>
//         <button onClick={handleNext} disabled={startIndex + itemsPerPage >= videoItems.length} className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50">
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Video_Cards;










import React, { useEffect, useState } from "react";

const Video_Cards = () => {
  const [videoItems, setVideoItems] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;


  const loadVideoItems = () => {
    const storedItems = localStorage.getItem("videoItems");
    if (storedItems) {
      setVideoItems(JSON.parse(storedItems));
    }
  };

  useEffect(() => {
    loadVideoItems();

    const handleStorageChange = (event) => {
      if (event.key === "videoItems") {
        loadVideoItems();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleNext = () => {
    if (startIndex + itemsPerPage < videoItems.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  return (
    <div className="w-full bg-[#D9D9D9] p-6">
      {videoItems.length === 0 ? (
        <p className="text-center text-gray-500">No video items generated yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#D9D9D9]">
          {videoItems.slice(startIndex, startIndex + itemsPerPage).map((item, index) => (
            <div key={index} className="flex items-center justify-center bg-[#D9D9D9] rounded-3xl p-4 flex-col">
              <div className="relative h-[22rem] w-[20rem] border border-gray-300 rounded-3xl flex items-center justify-center shadow-lg overflow-hidden">
                <img src={item?.imageUrl || "default image"} alt="Preview" className="h-full w-full object-cover rounded-3xl" />
              </div>
              <div className="w-[20rem] mt-4 bg-[#6A3A9F] text-white text-sm rounded-md p-2 text-center">
                <p className="bg-[#6A3A9F]">{item.description || "Default Description"}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-between mt-6 bg-[#D9D9D9]">
        <button onClick={handlePrev} disabled={startIndex === 0} className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50">
          Previous
        </button>
        <button onClick={handleNext} disabled={startIndex + itemsPerPage >= videoItems.length} className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  );
};

export default Video_Cards;
