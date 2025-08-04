import React from "react";

function Navbar() {
  return (
    <nav className="flex p-2 mt-0 bg-white flex-col sm:flex-row fixed top-0 z-30 w-full justify-between  text-black ">
      <div className="logo">
        <span className="font-bold text-xl cursor-pointer  mx-8">
          clientside
        </span>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:mt-0 mt-2 sm:gap-8 mx-9">
        <button className="cursor-pointer font-bold hover:text-blue-500  transition-all">
          login
        </button>
       <button className="cursor-pointer font-bold rounded-md px-2  bg-black text-white"  >Sign up</button>
        </div>

    </nav>
  );
}

export default Navbar;
