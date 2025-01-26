import React from "react";

const Video_Cards = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full bg-[#D9D9D9] ">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className=" flex items-center justify-center bg-[#D9D9D9] rounded-3xl p-4 flex flex-col justify-between"
          >
            <div className="z-1relative h-[22rem] w-[20rem] border border-gray-300 rounded-3xl flex items-center justify-center shadow-lg">
              {/* 3 dot icon */}
              {/* <div className="absolute top-4 right-4 transition-transform transform hover:scale-150 z-10" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="h-6 w-6 z-1"
                >
                  <path
                    fill="#6a3a9f"
                    d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                  />
                </svg>
              </div> */}
              
              {/* Add any content like an image or a video preview here */}
              <span className="text-gray-400">Preview Area</span>
            </div>

            <div className="w-[20rem] mt-4 bg-[#6A3A9F] text-white text-sm rounded-md p-2 text-center">
              <p className="bg-[#6A3A9F]">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Varius
                etiam pulvinar
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Video_Cards;
