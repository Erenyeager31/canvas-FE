import React from 'react'

const NavBar = () => {
  return (
    <>
    <div>
    <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white py-2 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">CANVAS</div>
        <div className="space-x-4">
          {/* Add navigation links or icons here if needed */}
          <div className="hidden md:block">
            <button className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default NavBar
