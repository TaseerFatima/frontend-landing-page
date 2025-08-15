import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css'
import { useAuth } from "../context/AuthContext";
import { useGoogleLogin } from '@react-oauth/google';


function SignupPage() {
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();
  const [user, setUser] = useState({ email: "", password: "", confirmpassword: "" });

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful!");
    navigate("/login");
  };
const login = useGoogleLogin({
  onSuccess: (tokenResponse) => {
    console.log(tokenResponse);
    authLogin(tokenResponse);
    navigate("/");
  },
  onError: () => {
    console.error("Login Failed");
  },
});

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

    <div className="flex flex-col min-h-screen bg-black" >

      <div className="flex-grow bg-black flex items-center justify-center p-4">
        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
          <h1 className="text-3xl text-white font-bold text-center mt-16">clientside</h1>
          <h2 className="text-xl text-white font-bold text-center">
            Register to use Clientside
          </h2>
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-500 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white "
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-500 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <input
            type="password"
            name="confirmpassword"
            placeholder="Confirm Password"
            value={user.confirmpassword}
            onChange={handleChange}
            className="w-full p-3 border border-gray-500 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />

          <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700">
            Sign Up
          </button>
          <h5 className="text-lg text-white text-center font-medium">OR</h5>
         <button onClick={() => login()} className="w-full p-2 border border-gray-500 rounded-md bg-transparent text-white hover:bg-gray-700 inline-flex items-center justify-center gap-2">
            <img src="search.png" alt="search" className="w-4 h-4" />
            Sign Up with Google
           </button>

          <button onClick={() => window.location.href = "http://localhost:5000/auth/github"}
 className="w-full p-2 border border-gray-500 rounded-md bg-transparent text-white hover:bg-gray-700 inline-flex items-center justify-center gap-2"><i className="fab fa-github"></i>
            Sign Up with GitHub
          </button>

          <div className="text-gray-400 text-sm text-center">
            By signing up you agree to the{" "}
            <a href="#" className="text-purple-600 hover:text-purple-600">Privacy Policy</a> &{" "}
            <a href="#" className="text-purple-600 hover:text-purple-600">Terms of Service</a>, and to receive emails from Clientside to further your frontend career.
          </div>

          <div className="mt-2 flex flex-row justify-center space-x-2 text-white text-sm"><h1>Already have an account? </h1><button onClick={() => navigate("/login")} className="text-purple-600 text-sm hover:underline hover:text-purple-700"> Login in</button></div>
        </form>
      </div>


         <hr className="mt-12 mb-10  bg-slate-100"></hr>
<div>
         <div className="grid  mx-16 grid-cols-1 sm:grid-cols-3  mt-6 gap-8 text-medium">
         <div>
        <h3 className="font-bold text-white mb-3">Explore</h3>
        <ul className="space-y-3 text-gray-600">
          <li><a href="#" className="font-semibold text-gray-500 hover:text-purple-600">Interview Projects and Problem</a></li>
          <li><a href="#" className="font-semibold text-gray-500 hover:text-purple-600">Interview Quizzes</a></li>
          <li><a href="#" className="font-semibold text-gray-500 hover:text-purple-600">Frontend Exercise</a></li>
          <li><a href="#" className="font-semibold text-gray-500 hover:text-purple-600">Javascript Mastry Course</a></li>
          <li><a href="#" className="font-semibold text-gray-500 hover:text-purple-600">Onboarding</a></li>
          <li><a href="#" className="font-semibold text-gray-500 hover:text-purple-600">FAQ</a></li>
        </ul>
      </div>

        <div>
        <h3 className="font-bold text-white mb-3">Resources</h3>
        <ul className="space-y-3 text-gray-600">
          <li><a href="#" className="font-semibold text-gray-500 hover:text-purple-600">Pricing</a></li>
          <li><a href="#" className="font-semibold text-gray-500 hover:text-purple-600">Clientside Goddies</a></li>
          <li><a href="#" className="font-semibold text-gray-500 hover:text-purple-600">About</a></li>
          <li><a href="#" className="font-semibold text-gray-500 hover:text-purple-600">Contact us</a></li>
        </ul>
      </div>

               <div>
        <h3 className="font-bold text-white mb-3">Legal</h3>
        <ul className="space-y-3 text-gray-600">
          <li><a href="#" className="font-semibold text-gray-500 hover:text-purple-600">Privacy policy</a></li>
          <li><a href="#" className="font-semibold text-gray-500 hover:text-purple-600">Term of Services</a></li>
        </ul>
      </div>
        </div>
  </div> 

 <hr className="mt-12 mb-1 mx-16  bg-slate-100"></hr>
  <footer className="  p-4 mx-16  ">
              <h1 className="text-sm text-gray-500 sm:text-base flex justify-between font-bold">
          Made with ❤️ in Boston © {new Date().getFullYear()} Clientside, LLC.
          <a href="/" target="_blank" rel="noopener noreferrer" className="inline-block ml-4">
        <div style={{ color: 'gray', fontSize: '16px' }}>
      <i className="fab fa-tiktok"></i>
      <i className="fab fa-youtube" style={{ marginLeft: '10px' }}></i>
      <i className="fab fa-twitter" style={{ marginLeft: '10px' }}></i>
        </div>
          </a>
        </h1></footer>
    </div>
    </div>
  );
}

export default SignupPage;
