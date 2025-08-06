import React from "react";

function Navbar() {
  return (
    <nav className="flex p-2 mt-0 bg-white flex-col sm:flex-row fixed top-0 z-30 w-full justify-between text-black shadow-md">
      

      <div className="logo">
        <span className="font-bold text-xl cursor-pointer mx-8">
          clientside
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 mx-9 sm:items-center mt-2 sm:mt-0">
        

        <button className="hidden sm:inline cursor-pointer font-bold hover:text-blue-500 transition-all">
          Login
        </button>

        
        <button className="cursor-pointer sm:px-1 sm:py-1 font-bold rounded-md px-4 py-1 bg-black text-white">
          Sign up
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
