import React from "react";

function Box2() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col px-6 py-16 sm:px-10 md:px-20 lg:px-24">
      {/* Top Heading */}
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-700 text-transparent bg-clip-text text-center leading-tight ">
          Access the #1 Frontend
          <span>
            <br /> Training Platform
          </span>
        </h2>
        <p className="text-lg sm:text-2xl lg:text-3xl text-white mt-6 text-center">
          Land your dream role by practicing with the exact questions{" "}
          <br className="hidden sm:block" />
          you can expect in your interviews and on the job.
        </p>
      </div>

      {/* Centered Card */}
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-white text-black rounded-2xl shadow-lg w-full max-w-md py-10 px-6 sm:px-16">
          <h2 className="font-bold text-gray-600 mb-4 text-center text-lg sm:text-xl">
            Clientside Pro Lifetime Access
          </h2>

          <div className="text-4xl sm:text-6xl font-bold text-black mb-2 text-center">
            $39
            <span className="font-bold text-sm text-gray-600">
              {" "}
              /Lifetime access
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-10 text-center">
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
                <span className="font-bold text-gray-600 text-base">
                  {text}
                </span>
              </div>
            ))}
          </div>

          <button className="bg-black mb-4 text-white w-full py-2 rounded-lg font-semibold transition">
            Upgrade to Pro
          </button>

          <div className="text-center">
            <a className="text-black underline font-bold cursor-pointer">
              Let me try the exercises first
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 px-4">
        <h2 className="font-bold text-white text-center text-sm sm:text-base leading-relaxed">
          * Pro Tip: Many Clientside members have reimbursed{" "}
          <br className="hidden sm:block" />
          their memberships as a part of their company's learning stipend
        </h2>
      </div>
    </div>
  );
}

export default Box2;
