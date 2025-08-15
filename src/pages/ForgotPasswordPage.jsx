import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email) {
      storedUser.password = newPassword;
      localStorage.setItem("user", JSON.stringify(storedUser));
      setMessage("Password reset successfully! You can now log in.");
      setTimeout(() => navigate("/login"), 2000);
    } else {
      setMessage("Email not found.");
    }
  };

  return (
    <div>
      <nav className="flex p-2 mt-0 bg-black flex-col sm:flex-row fixed top-0 z-30 w-full justify-between text-white shadow-md">
        <div className="logo">
          <span className="font-bold text-xl cursor-pointer mx-8">
            clientside
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 mx-9 sm:items-center mt-2 sm:mt-0">
          <button className="hidden sm:inline cursor-pointer font-bold hover:text-blue-500 transition-all">
            Pricing
          </button>

          <button className="cursor-pointer sm:px-1 sm:py-1 font-bold rounded-md px-2 py-1 bg-white  text-black">
            Sign up
          </button>
        </div>
      </nav>

      <div className="flex flex-col min-h-screen bg-black">
      <div className="flex flex-col min-h-screen bg-black justify-center items-center p-4">
        <form
          onSubmit={handleReset}
          className="w-full max-w-md flex flex-col gap-4 p-6 rounded-md"
        >
          <h1 className="text-3xl text-white font-bold text-center mt-16">
            clientside
          </h1>
          <h2 className="text-3xl text-white text-center mb-6 font-sans">
            Get a new password
          </h2>

          {message && (
            <p
              className={`text-center ${
                message.includes("successfully")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}

          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 w-full border border-gray-600 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="p-3 w-full border border-gray-600 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <button
            type="submit"
            className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700"
          >
            Reset Password
          </button>
          <div className="flex flex-row gap-x-2 items-center justify-center">
            {" "}
            <p className="text-white text-sm ">Remember it after all?</p>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-purple-500 hover:underline text-center"
            >
              Login
            </button>
          </div>
        </form>
      </div>
       <hr className="mt-12 mb-10  bg-slate-100"></hr>
<div>
         <div class="grid  mx-16 grid-cols-1 sm:grid-cols-3 mt-6 gap-8 text-medium">
         <div>
        <h3 class="font-bold text-white mb-3">Explore</h3>
        <ul class="space-y-3 text-gray-600">
          <li><a href="#" className="font-semibold text-gray-500 hover:text-purple-600">Interview Projects and Problem</a></li>
          <li><a href="#" className="font-semibold text-gray-500 hover:text-purple-600">Interview Quizzes</a></li>
          <li><a href="#" className="font-semibold text-gray-500 hover:text-purple-600">Frontend Exercise</a></li>
          <li><a href="#" className="font-semibold text-gray-500 hover:text-purple-600">Javascript Mastry Course</a></li>
          <li><a href="#" className="font-semibold text-gray-500 hover:text-purple-600">Onboarding</a></li>
          <li><a href="#" className="font-semibold text-gray-500 hover:text-purple-600">FAQ</a></li>
        </ul>
      </div>

        <div>
        <h3 class="font-bold text-white mb-3">Resources</h3>
        <ul class="space-y-3 text-gray-600">
          <li><a href="#" className="font-semibold text-gray-500 hover:text-purple-600">Pricing</a></li>
          <li><a href="#" className="font-semibold text-gray-500 hover:text-purple-600">Clientside Goddies</a></li>
          <li><a href="#" className="font-semibold text-gray-500 hover:text-purple-600">About</a></li>
          <li><a href="#" className="font-semibold text-gray-500 hover:text-purple-600">Contact us</a></li>
        </ul>
      </div>

               <div>
        <h3 class="font-bold text-white mb-3">Legal</h3>
        <ul class="space-y-3 text-gray-600">
          <li><a href="#" className="font-semibold text-gray-500 hover:text-purple-600">Privacy policy</a></li>
          <li><a href="#" className="font-semibold text-gray-500 hover:text-purple-600">Term of Services</a></li>
        </ul>
      </div>
        </div>
  </div> 

 <hr className="mt-12 mb-1 mx-16  bg-slate-100"></hr>
        <footer className="  p-4 mx-16  ">
              <p className="text-sm text-gray-500 sm:text-base flex justify-between font-bold">
          Made with ❤️ in Boston © {new Date().getFullYear()} Clientside, LLC.
          <a href="/" target="_blank" rel="noopener noreferrer" className="inline-block ml-4">
        <div style={{ color: 'gray', fontSize: '16px' }}>
      <i className="fab fa-tiktok"></i>
      <i className="fab fa-youtube" style={{ marginLeft: '10px' }}></i>
      <i className="fab fa-twitter" style={{ marginLeft: '10px' }}></i>
        </div>
          </a>
        </p></footer>
    </div>
        </div>
  
  );
}

export default ForgotPasswordPage;
