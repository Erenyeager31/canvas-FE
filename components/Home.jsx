import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
const Home = () => {

  return (
    <>
      <header className="text-center my-12">
        <h1 className="text-4xl md:text-6xl font-bold text-[#6A3A9F]">The fastest way to create short video</h1>
        <p className="mt-4 text-lg md:text-xl">Canvas is an AI-powered tool that generates high-quality videos from a simple description.</p>
        <div className="mt-8 flex justify-center">
              <Link to="/generator-step-1"
                className="w-1/6 bg-[#6A3A9F] text-white py-2 rounded-full hover:bg-purple-600 transition-transform transform hover:scale-105 "
              >
                Generate your first video
              </Link>
            </div>
      </header>

      <Footer></Footer>
    </>
  );
};

export default Home;
