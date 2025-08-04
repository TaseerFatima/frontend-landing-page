import React from "react";

function Box2() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col p-20">
      {/* Top Heading */}
      <div className="mb-12">
        <h2 className="text-5xl font-bold text-white text-center leading-tight">
          Access the
          <span className="text-purple-400"> #1 Frontend <br /> Training Platform</span>
        </h2>
        <p className="text-3xl text-white mt-4 text-center">
          Land your dream role by practicing with the exact questions <br />
          you can expect in your interviews and on the job.
        </p>
      </div>

      {/* Centered Card */}
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-white text-black rounded-2xl shadow-lg max-w-md w-full py-10 px-6">
          <h2 className="font-bold text-gray-600 mb-4">
            Clientside Pro Lifetime Access
          </h2>

          <div className="text-6xl font-bold text-black mb-2">
            $39
            <span className="font-bold text-sm text-gray-600"> /Lifetime access</span>
          </div>

          <p className="text-sm text-gray-600 mb-10">
            Includes all future platform updates
          </p>

          {/* Bullet Points */}
          <div className="flex flex-col space-y-4 mb-6">
            {[
              "120+ Frontend Challenges",
              "600+ Unit Tests",
              "Senior Solutions",
              "Real Interview Questions",
              "New Exercises Added Weekly",
              "Access All Future Updates",
            ].map((text) => (
              <div key={text} className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-xs">
                  ✓
                </div>
                <span className="font-bold text-gray-600 text-base">{text}</span>
              </div>
            ))}
          </div>

          <button className="bg-black mb-4 text-white px-6 shadow-xl py-2 rounded-lg transition">
            Upgrade to Pro
          </button>

          <div>
            <a className="text-black underline font-bold">
              Let me try the exercises first
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box2;
