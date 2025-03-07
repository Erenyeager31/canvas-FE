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

















// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// const Video_Cards = () => {
//   const [videoItems, setVideoItems] = useState([]);
//   const [startIndex, setStartIndex] = useState(0);
//   const itemsPerPage = 4;

//   const loadVideoItems = () => {
//     const storedItems = localStorage.getItem("videoItems");
//     if (storedItems) {
//       setVideoItems(JSON.parse(storedItems));
//     }
//   };

//   useEffect(() => {
//     loadVideoItems();

//     const handleStorageChange = (event) => {
//       if (event.key === "videoItems") {
//         loadVideoItems();
//       }
//     };

//     window.addEventListener("storage", handleStorageChange);
//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
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
//       {videoItems.length === 0 ? (
//         <p className="text-center text-gray-500">
//           No video items generated yet.
//         </p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#D9D9D9]">
//           {videoItems
//             .slice(startIndex, startIndex + itemsPerPage)
//             .map((item, index) => (
//               <div
//                 key={index}
//                 className="flex items-center justify-center bg-[#D9D9D9] rounded-3xl p-4 flex-col"
//               >
//                 <div className="relative h-[22rem] w-[20rem] border border-gray-300 rounded-3xl flex items-center justify-center shadow-lg overflow-hidden">
//                   <img
//                     src={item?.imageUrl || "default image"}
//                     alt="Preview"
//                     className="h-full w-full object-cover rounded-3xl"
//                   />
//                 </div>
//                 <div className="w-[20rem] mt-4 bg-[#6A3A9F] text-white text-sm rounded-md p-2 text-center">
//                   <p className="bg-[#6A3A9F]">
//                     {item.description || "Default Description"}
//                   </p>
//                 </div>
//               </div>
//             ))}
//         </div>
//       )}

//       <div className="flex justify-between mt-6 bg-[#D9D9D9]">
//         <button
//           onClick={handlePrev}
//           disabled={startIndex === 0}
//           className="bg-[#6A3A9F] px-4 py-2 rounded-lg text-white rounded disabled:opacity-50 transition transition-transform transform hover:scale-105"
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={startIndex + itemsPerPage >= videoItems.length}
//           className="bg-[#6A3A9F] px-4 py-2 rounded-lg text-white rounded disabled:opacity-50 transition transition-transform transform hover:scale-105"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Video_Cards;

/* -------------------------------------------------------------------------- */
/*                    code was working fine on 12-02-2025,                    */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                new code further added for dynamic generation               */
/* -------------------------------------------------------------------------- */

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const Video_Cards = () => {
//   const [videoItems, setVideoItems] = useState([]);
//   const [startIndex, setStartIndex] = useState(0);
//   const [selectedItems, setSelectedItems] = useState({});
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editPrompt, setEditPrompt] = useState("");
//   const [modifiedPrompts, setModifiedPrompts] = useState({});
//   const itemsPerPage = 4;

//   const loadVideoItems = () => {
//     const storedItems = localStorage.getItem("videoItems");
//     if (storedItems) {
//       setVideoItems(JSON.parse(storedItems));
//     }
//   };

//   useEffect(() => {
//     loadVideoItems();

//     const handleStorageChange = (event) => {
//       if (event.key === "videoItems") {
//         loadVideoItems();
//       }
//     };

//     window.addEventListener("storage", handleStorageChange);
//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
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

//   const toggleSelection = (index) => {
//     setSelectedItems(prev => {
//       const newSelection = {
//         ...prev,
//         [index]: !prev[index]
//       };

//       // If unselecting, cancel any active editing for this item
//       if (!newSelection[index] && editingIndex === index) {
//         setEditingIndex(null);
//         setEditPrompt("");
//       }

//       return newSelection;
//     });
//   };

//   const startEditing = (index, currentPrompt) => {
//     if (!selectedItems[index]) return;
//     setEditingIndex(index);
//     setEditPrompt(modifiedPrompts[index] || currentPrompt);
//   };

//   const savePrompt = (index) => {
//     if (!selectedItems[index]) return;
//     setModifiedPrompts(prev => ({
//       ...prev,
//       [index]: editPrompt
//     }));
//     setEditingIndex(null);
//   };

//   const cancelEditing = () => {
//     setEditingIndex(null);
//     setEditPrompt("");
//   };

//   return (
//     <div className="w-full bg-[#D9D9D9] p-6">
//       {videoItems.length === 0 ? (
//         <p className="text-center text-gray-500">
//           No video items generated yet.
//         </p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#D9D9D9]">
//           {videoItems
//             .slice(startIndex, startIndex + itemsPerPage)
//             .map((item, index) => {
//               const actualIndex = startIndex + index;
//               const isSelected = selectedItems[actualIndex] || false;

//               return (
//                 <div
//                   key={actualIndex}
//                   className="flex items-center justify-center bg-[#D9D9D9] rounded-3xl p-4 flex-col"
//                 >
//                   <div className="relative h-[22rem] w-[20rem] border border-gray-300 rounded-3xl flex items-center justify-center shadow-lg overflow-hidden">
//                     <div className="absolute top-4 left-4 z-10">
//                       <input 
//                         type="checkbox"
//                         checked={isSelected}
//                         onChange={() => toggleSelection(actualIndex)}
//                         className="w-5 h-5 rounded-md cursor-pointer"
//                       />
//                     </div>
//                     <img
//                       src={item?.imageUrl || "default image"}
//                       alt="Preview"
//                       className="h-full w-full object-cover rounded-3xl"
//                     />
//                   </div>
//                   <div className="w-[20rem] mt-4 bg-[#6A3A9F] text-white text-sm rounded-md p-2">
//                     {editingIndex === actualIndex ? (
//                       <div className="flex flex-col gap-2 bg-[#6A3A9F]">
//                         <textarea
//                           value={editPrompt}
//                           onChange={(e) => setEditPrompt(e.target.value)}
//                           className="w-full p-2 text-black rounded-md resize-none"
//                           rows="3"
//                         />
//                         <div className="flex justify-end gap-2 bg-[#6A3A9F]">
//                           <button
//                             onClick={() => savePrompt(actualIndex)}
//                             className="px-3 py-1 bg-green-600 rounded-md hover:bg-green-700 text-white"
//                             title="Save"
//                           >
//                             ✓
//                           </button>
//                           <button
//                             onClick={cancelEditing}
//                             className="px-3 py-1 bg-red-600 rounded-md hover:bg-red-700 text-white"
//                             title="Cancel"
//                           >
//                             ✕
//                           </button>
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="flex justify-between items-center bg-[#6A3A9F]">
//                         <p className="bg-[#6A3A9F] flex-1">
//                           {modifiedPrompts[actualIndex] || item.description || "Default Description"}
//                         </p>
//                         {isSelected && (
//                           <button
//                             onClick={() => startEditing(actualIndex, item.description)}
//                             className="ml-2 px-2 py-1 hover:bg-purple-800 rounded-md"
//                             title="Edit"
//                           >
//                             ✎
//                           </button>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//         </div>
//       )}

//       <div className="flex justify-between mt-6 bg-[#D9D9D9]">
//         <button
//           onClick={handlePrev}
//           disabled={startIndex === 0}
//           className="bg-[#6A3A9F] px-4 py-2 rounded-lg text-white disabled:opacity-50 transition transform hover:scale-105"
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={startIndex + itemsPerPage >= videoItems.length}
//           className="bg-[#6A3A9F] px-4 py-2 rounded-lg text-white disabled:opacity-50 transition transform hover:scale-105"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Video_Cards;

/* -------------------------------------------------------------------------- */
/*                            New code on 12-02-25                            */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                     functionality of dynamic generation                    */
/* -------------------------------------------------------------------------- */

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BaseUrl } from "../src/utils/BaseUrls";

const Video_Cards = () => {
  const [videoItems, setVideoItems] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [selectedItems, setSelectedItems] = useState({});
  const [editingIndex, setEditingIndex] = useState(null);
  const [editPrompt, setEditPrompt] = useState("");
  const [modifiedPrompts, setModifiedPrompts] = useState({});
  const [isRegenerating, setIsRegenerating] = useState(false);
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

  const toggleSelection = (index) => {
    setSelectedItems(prev => {
      const newSelection = {
        ...prev,
        [index]: !prev[index]
      };

      if (!newSelection[index] && editingIndex === index) {
        setEditingIndex(null);
        setEditPrompt("");
      }

      return newSelection;
    });
  };

  const startEditing = (index, currentPrompt) => {
    if (!selectedItems[index]) return;
    setEditingIndex(index);
    setEditPrompt(modifiedPrompts[index] || currentPrompt);
  };

  const savePrompt = (index) => {
    if (!selectedItems[index]) return;
    setModifiedPrompts(prev => ({
      ...prev,
      [index]: editPrompt
    }));
    setEditingIndex(null);
  };

  const cancelEditing = () => {
    setEditingIndex(null);
    setEditPrompt("");
  };

  const handleRegenerate = async () => {
    try {
      setIsRegenerating(true);

      // Collect modified prompts and their indices
      const promptsToRegenerate = [];
      const selectedIndices = [];

      Object.keys(selectedItems).forEach(index => {
        if (selectedItems[index] && modifiedPrompts[index]) {
          promptsToRegenerate.push(modifiedPrompts[index]);
          selectedIndices.push(parseInt(index));
        }
      });

      if (promptsToRegenerate.length === 0) {
        console.log("No modified prompts to regenerate");
        return;
      }

      const response = await fetch(`${BaseUrl}/api/genImage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompts: promptsToRegenerate,
          "width": 512,
          "height": 512,
          "guidance_scale": 1.1,
          "inference_steps": 2
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to regenerate images');
      }

      const newImageUrls = await response.json();

      setVideoItems(prevItems => {
        const updatedItems = [...prevItems];

        selectedIndices.forEach((index, arrayIndex) => {
          if (newImageUrls[arrayIndex]) {
            updatedItems[index] = {
              ...updatedItems[index],
              imageUrl: newImageUrls[arrayIndex], // Ensure proper access to images
              description: promptsToRegenerate[arrayIndex]
            };
          }
        });

        // Store updated items in localStorage
        localStorage.setItem("videoItems", JSON.stringify(updatedItems));

        return updatedItems;
      });

      // Clear selections after successful regeneration
      setSelectedItems({});
      setModifiedPrompts({});
    } catch (error) {
      console.error('Error regenerating images:', error);
    } finally {
      setIsRegenerating(false);
    }
  };

  const hasSelectedItems = Object.values(selectedItems).some(selected => selected);

  return (
    <div className="w-full bg-[#D9D9D9] p-6">
      {videoItems.length === 0 ? (
        <p className="text-center text-gray-500">
          No video items generated yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#D9D9D9]">
          {videoItems
            .slice(startIndex, startIndex + itemsPerPage)
            .map((item, index) => {
              const actualIndex = startIndex + index;
              const isSelected = selectedItems[actualIndex] || false;

              return (
                <div
                  key={actualIndex}
                  className="flex items-center justify-center bg-[#D9D9D9] rounded-3xl p-4 flex-col"
                >
                  <div className="relative h-[22rem] w-[20rem] border border-gray-300 rounded-3xl flex items-center justify-center shadow-lg overflow-hidden">
                    <div className="absolute top-4 left-4 z-10">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelection(actualIndex)}
                        className="w-5 h-5 rounded-md cursor-pointer"
                      />
                    </div>
                    <img
                      src={item?.imageUrl || "default image"}
                      alt="Preview"
                      className="h-full w-full aspect-16/9 object-cover rounded-3xl"
                    />
                  </div>
                  <div className="w-[20rem] mt-4 bg-[#6A3A9F] text-white text-sm rounded-md p-2">
                    {editingIndex === actualIndex ? (
                      <div className="flex flex-col gap-2 bg-[#6A3A9F]">
                        <textarea
                          value={editPrompt}
                          onChange={(e) => setEditPrompt(e.target.value)}
                          className="w-full p-2 text-black rounded-md resize-none"
                          rows="3"
                        />
                        <div className="flex justify-end gap-2 bg-[#6A3A9F]">
                          <button
                            onClick={() => savePrompt(actualIndex)}
                            className="px-3 py-1 bg-green-600 rounded-md hover:bg-green-700 text-white"
                            title="Save"
                          >
                            ✓
                          </button>
                          <button
                            onClick={cancelEditing}
                            className="px-3 py-1 bg-red-600 rounded-md hover:bg-red-700 text-white"
                            title="Cancel"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-between items-center bg-[#6A3A9F]">
                        <p className="bg-[#6A3A9F] flex-1">
                          {modifiedPrompts[actualIndex] || item.description || "Default Description"}
                        </p>
                        {isSelected && (
                          <button
                            onClick={() => startEditing(actualIndex, item.description)}
                            className="ml-2 px-2 py-1 hover:bg-purple-800 rounded-md"
                            title="Edit"
                          >
                            ✎
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      )}

      <div className="flex justify-between mt-6 bg-[#D9D9D9]">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="bg-[#6A3A9F] px-4 py-2 rounded-lg text-white disabled:opacity-50 transition transform hover:scale-105"
        >
          Previous
        </button>

        {hasSelectedItems && (
          <button
            onClick={handleRegenerate}
            disabled={isRegenerating}
            className="bg-[#6A3A9F] px-4 py-2 rounded-lg text-white disabled:opacity-50 transition transform hover:scale-105"
          >
            {isRegenerating ? "Regenerating..." : "Regenerate Selected"}
          </button>
        )}

        <button
          onClick={handleNext}
          disabled={startIndex + itemsPerPage >= videoItems.length}
          className="bg-[#6A3A9F] px-4 py-2 rounded-lg text-white disabled:opacity-50 transition transform hover:scale-105"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Video_Cards;