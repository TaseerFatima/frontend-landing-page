import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css'

function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.email === form.email &&
      storedUser.password === form.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Login successful!");
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Login Form Section */}
      <div className="flex-grow flex items-center justify-center p-4">
        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
          <h1 className="text-3xl text-white font-bold text-center mt-16">clientside</h1>
          <h2 className="text-3xl text-white text-center mb-6 font-sans">Login to Continue</h2>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="p-3 w-full border border-gray-600 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="p-3 w-full border border-gray-400 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />

          <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700">
            Login
          </button>

          <h5 className="text-lg text-white text-center mt-2">OR</h5>

           <button className="w-full p-2 border border-gray-500 rounded-md bg-transparent text-white hover:bg-gray-700 inline-flex items-center justify-center gap-2">
            <img src="search.png" alt="search" className="w-4 h-4" />
            Sign Up with Google
           </button>
          <button className="w-full p-2 border border-gray-500 rounded-md bg-transparent text-white hover:bg-gray-700 inline-flex items-center justify-center gap-2"><i className="fab fa-github"></i>
            Sign Up with GitHub
          </button>

          <div className="flex justify-center space-x-6 text-sm">
            <button className="text-purple-600 hover:underline">Create an account</button>
            <button className="text-purple-600 hover:underline">Forgot Password?</button>
          </div>
        </form>
      </div>
         <hr className="mt-12 mb-7  bg-slate-100"></hr>
<div>
         <div class="grid  mx-16 grid-cols-3 mt-6 gap-8 text-medium">
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

 <hr className="mt-12 mb-7 mx-16  bg-slate-100"></hr>
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
  );
}

export default LoginPage;

