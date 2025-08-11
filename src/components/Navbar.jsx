import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null); 

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex p-2 mt-0 bg-white flex-col sm:flex-row fixed top-0 z-30 w-full justify-between text-black ">
      <div className="logo">
        <span className="font-bold text-xl cursor-pointer mx-8">clientside</span>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 mx-9 sm:items-center mt-2 sm:mt-0">
        {!isLoggedIn ? (
          <>
            <Link to="/login">
              <button className="hidden sm:inline cursor-pointer font-bold hover:text-blue-500 transition-all">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="cursor-pointer sm:px-1 sm:py-1 font-bold rounded-md px-2 py-1 bg-black text-white">
                Sign up
              </button>
            </Link>
          </>
        ) : (
          <div className="relative" ref={dropdownRef}>
            {/* Profile Icon */}
            <div
              className="flex  items-center gap-4 cursor-pointer"
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              <span className="font-bold text-xl">Pricing</span>
             <div className="bg-gray-200 w-9 items-center flex justify-center h-9 rounded-full border"> <img
                src="user.png"
                alt="profile"
                className="w-5 h-5 rounded-full border "
              /></div>
            </div>

            {/* Dropdown */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-52 bg-black border border-gray-200 rounded-md shadow-lg z-50">
                <button className="w-full inline-flex items-center space-x-2 px-4 py-2 text-white hover:bg-gray-600">
                  <img src="/account.png" alt="Logo" className="w-4 h-4" />
                  <span>Account & Billing</span>
                </button>

                <hr className="bg-slate-200" />
                <button
                  onClick={handleLogout}
                  className="w-full inline-flex items-center space-x-2 px-4 py-2 text-bold text-white hover:bg-gray-600"
                >
                  <img src="signout.png" alt="Logo" />
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
