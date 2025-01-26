import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const User_Details = () => {
  return (
    <>
      <div className=" mx-4 mt-6">
        <div className="min-h-screen white">
          <div className="bg-white w-full h-full">
            <motion.div className="p-6 space-y-4 bg-[#D9D9D9] rounded-3xl"
                          initial={{ y: -50, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 100, duration: 0.6 }}>
              <div className="flex h-[750px] bg-[#D9D9D9]">
                {/* Sidebar */}
                <div className="w-1/4 bg-[#6A3A9F] p-8 text-white flex flex-col rounded-3xl ">
                  <div className="flex items-center mb-8 bg-[#6A3A9F]">
                    <h2
                      className="ml-4 text-2xl font-bold bg-[#6A3A9F]"
                      style={{ fontFamily: "'Caveat', cursive" }}
                    >
                      Welcome, Ankit
                    </h2>
                  </div>
                  <nav className="space-y-6 bg-[#6A3A9F]">
                    <Link
                      to="/"
                      className="flex items-center text-gray-800 hover:bg-gray-100 px-4 py-2 rounded w-full transition-transform transform hover:scale-105"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="#6A3A9F"
                          d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                        />
                      </svg>
                      Home
                    </Link>
                    <Link
                      to="/generator-step-1"
                      className="flex items-center text-gray-800 hover:bg-gray-100 px-4 py-2 rounded w-full transition-transform transform hover:scale-105"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="#6A3A9F"
                          d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"
                        />
                      </svg>
                      Create Video
                    </Link>
                    <Link
                      to="/about-us"
                      className="flex items-center text-gray-800 hover:bg-gray-100 px-4 py-2 rounded w-full transition-transform transform hover:scale-105"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="#6A3A9F"
                          d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 256l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16L80 384c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                        />
                      </svg>
                      About
                    </Link>

                    <Link
                      to="/contact-us"
                      className="flex items-center text-gray-800 hover:bg-gray-100 px-4 py-2 rounded w-full transition-transform transform hover:scale-105"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="#6A3A9F"
                          d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                        />
                      </svg>
                      Contact Us
                    </Link>

                    <Link
                      to="/Community"
                      className="flex items-center text-gray-800 hover:bg-gray-100 px-4 py-2 rounded w-full transition-transform transform hover:scale-105"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                      >
                        <path
                          fill="#6A3A9F"
                          d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"
                        />
                      </svg>
                      Community
                    </Link>
                    <Link
                      to="/my-projects"
                      className="flex items-center text-gray-800 hover:bg-gray-100 px-4 py-2 rounded w-full transition-transform transform hover:scale-105"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 mr-2"
                      >
                        <path
                          fill="#6a3a9f"
                          d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"
                        />
                      </svg>
                      My Projects
                    </Link>

                    <Link
                      to="/billing-payments"
                      className="flex items-center text-gray-800 hover:bg-gray-100 px-4 py-2 rounded w-full transition-transform transform hover:scale-105"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        className="w-5 h-5 mr-2"
                      >
                        <path
                          fill="#6a3a9f"
                          d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM64 80c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 96c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16zm128 72c8.8 0 16 7.2 16 16l0 17.3c8.5 1.2 16.7 3.1 24.1 5.1c8.5 2.3 13.6 11 11.3 19.6s-11 13.6-19.6 11.3c-11.1-3-22-5.2-32.1-5.3c-8.4-.1-17.4 1.8-23.6 5.5c-5.7 3.4-8.1 7.3-8.1 12.8c0 3.7 1.3 6.5 7.3 10.1c6.9 4.1 16.6 7.1 29.2 10.9l.5 .1s0 0 0 0s0 0 0 0c11.3 3.4 25.3 7.6 36.3 14.6c12.1 7.6 22.4 19.7 22.7 38.2c.3 19.3-9.6 33.3-22.9 41.6c-7.7 4.8-16.4 7.6-25.1 9.1l0 17.1c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-17.8c-11.2-2.1-21.7-5.7-30.9-8.9c0 0 0 0 0 0c-2.1-.7-4.2-1.4-6.2-2.1c-8.4-2.8-12.9-11.9-10.1-20.2s11.9-12.9 20.2-10.1c2.5 .8 4.8 1.6 7.1 2.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c13.6 4.6 24.6 8.4 36.3 8.7c9.1 .3 17.9-1.7 23.7-5.3c5.1-3.2 7.9-7.3 7.8-14c-.1-4.6-1.8-7.8-7.7-11.6c-6.8-4.3-16.5-7.4-29-11.2l-1.6-.5s0 0 0 0c-11-3.3-24.3-7.3-34.8-13.7c-12-7.2-22.6-18.9-22.7-37.3c-.1-19.4 10.8-32.8 23.8-40.5c7.5-4.4 15.8-7.2 24.1-8.7l0-17.3c0-8.8 7.2-16 16-16z"
                        />
                      </svg>
                      Billing & Payments
                    </Link>

                    <Link
                      to="/settings"
                      className="flex items-center text-gray-800 hover:bg-gray-100 px-4 py-2 rounded w-full transition-transform transform hover:scale-105"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="#6A3A9F"
                          d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
                        />
                      </svg>
                      Settings
                    </Link>
                  </nav>

                  <Link
                    to=""
                    type="submit"
                    className=" mt-auto block w-1/3 text-center bg-white text-red-400 py-2 rounded-full hover:bg-grey-600 transition-transform transform hover:scale-105"
                  >
                    Log Out
                  </Link>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-8 bg-[#D9D9D9]">
                  <h1 className="text-2xl text-[#6A3A9F] font-bold mb-6 bg-[#D9D9D9]">
                    Your personal profile info
                  </h1>
                  <div className="grid grid-cols-2 gap-10 bg-[#D9D9D9]">
                    {/* Profile Form */}
                    <div className="flex flex-col bg-[#D9D9D9] ">
                      <label
                        className="mb-1 text-gray-600 bg-[#D9D9D9]"
                        htmlFor="first-name"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        className="p-3 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#6A3A9F] focus:ring-offset-2 transition-transform transform hover:scale-105 "
                        placeholder="Name"
                      />
                    </div>
                    <div className="flex flex-col bg-[#D9D9D9]">
                      <label
                        className="mb-1 text-gray-600 bg-[#D9D9D9]"
                        htmlFor="last-name"
                      >
                        Last name
                      </label>

                      <input
                        type="text"
                        id="last-name"
                        className="p-3 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#6A3A9F] focus:ring-offset-2 transition-transform transform hover:scale-105"
                        placeholder="Surname"
                      />
                    </div>
                    <div className="flex flex-col bg-[#D9D9D9]">
                      <label
                        className="mb-1 text-gray-600 bg-[#D9D9D9] "
                        htmlFor="username"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        className="p-3 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#6A3A9F] focus:ring-offset-2 transition-transform transform hover:scale-105"
                        placeholder="Username"
                      />
                    </div>
                    <div className="flex flex-col bg-[#D9D9D9]">
                      <label
                        className="mb-1 text-gray-600 bg-[#D9D9D9]"
                        htmlFor="email"
                      >
                        Your e-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="p-3 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#6A3A9F] focus:ring-offset-2 transition-transform transform hover:scale-105"
                        placeholder="mail@example.com"
                      />
                    </div>
                    <div className="flex flex-col bg-[#D9D9D9]">
                      <label
                        className="mb-1 text-gray-600 bg-[#D9D9D9]"
                        htmlFor="personal-phone"
                      >
                        Personal phone number
                      </label>
                      <input
                        type="text"
                        id="personal-phone"
                        className="p-3 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#6A3A9F] focus:ring-offset-2 transition-transform transform hover:scale-105"
                        placeholder="+380 44 123 45 67"
                      />
                    </div>
                    <div className="flex flex-col bg-[#D9D9D9]">
                      <label
                        className="mb-1 text-gray-600 bg-[#D9D9D9]"
                        htmlFor="work-phone"
                      >
                        Work phone number
                      </label>
                      <input
                        type="text"
                        id="work-phone"
                        className="p-3 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#6A3A9F] focus:ring-offset-2 transition-transform transform hover:scale-105"
                        placeholder="+380 44 123 45 67"
                      />
                    </div>
                    <div className="flex flex-col bg-[#D9D9D9]">
                      <label
                        className="mb-1 text-gray-600 bg-[#D9D9D9]"
                        htmlFor="country-city"
                      >
                        Country, City
                      </label>
                      <input
                        type="text"
                        id="country-city"
                        className="p-3 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#6A3A9F] focus:ring-offset-2 transition-transform transform hover:scale-105"
                        placeholder="Ukraine, Kyiv"
                      />
                    </div>
                    <div className="flex flex-col bg-[#D9D9D9]">
                      <label
                        className="mb-1 text-gray-600 bg-[#D9D9D9]"
                        htmlFor="organization"
                      >
                        Organization
                      </label>
                      <input
                        type="text"
                        id="organization"
                        className="p-3 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#6A3A9F] focus:ring-offset-2 transition-transform transform hover:scale-105"
                        placeholder="Organization name"
                      />
                    </div>
                  </div>
                  <div className="mt-8 bg-[#D9D9D9] flex justify-center">
                    <button
                      type="submit"
                      className="w-1/3 bg-[#6A3A9F] text-white py-2 rounded-full hover:bg-purple-600 transition-transform transform hover:scale-105"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User_Details;
