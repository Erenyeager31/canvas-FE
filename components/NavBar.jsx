import React from "react";
import "../components/CSS/Navbar.css";
const NavBar = () => {
  return (
    <>
      <div className="rounded-full mx-4 my-1 from-purple-500 to-purple-700 text-white py-4 px-4 animated-border bg-black">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-xl ">CANVAS</div>
          <div className="space-x-4">
            {/* Add navigation links or icons here if needed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
