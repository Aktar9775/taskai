import React from "react";
import "./Navber.css";
function Navber() {
  return (
    <div>
    <nav className=" container mx-auto px-8 p-2 flex flex-col md:flex-row items-center justify-between rounded-2xl shadow-md border border-gray-800 bg-white/5 backdrop-filter backdrop-sepia-[10%]">
      {/* Logo */}
      <div className="text-white text-2xl font-semibold mb-4 md:mb-0">adTask.ai</div>

      {/* Navigation Links */}
      <div className="flex flex-col text-1px md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-white">
        <div className="relative group">
          <button className="hover:text-gray-400">Products ▼</button>
          {/* Dropdown content (optional) */}
          <div className="absolute hidden group-hover:block bg-black text-white mt-2 p-2 rounded-lg shadow-md">
            <a href="#" className="block px-4 py-2 hover:bg-gray-800">
              Product 1
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-800">
              Product 2
            </a>
          </div>
        </div>
  
        <div className="relative group">
          <button className="hover:text-gray-400">Tools ▼</button>
          <div className="absolute hidden group-hover:block bg-black text-white mt-2 p-2 rounded-lg shadow-md">
            <a href="#" className="block px-4 py-2 hover:bg-gray-800">
              Tool 1
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-800">
              Tool 2
            </a>
          </div>
        </div>
  
        <a href="#" className="hover:text-gray-400">
          Contact Us
        </a>
      </div>
  
      {/* Buttons */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
        <button className="px-8 border border-gray-400 text-white rounded-4xl hover:bg-gray-600 bg-gradient-to-t from-gray-600 to-black">
          Log in
        </button>
        <button className="px-6 py-2 border border-gray-400 text-white rounded-4xl relative bg-gradient-to-t from-gray-500 to-black hover:from-gray-600 hover:to-black">
          Schedule a Call
          {/* <span className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full"></span> */}
        </button>
      </div>
    </nav>
  </div>
  );
}

export default Navber;
