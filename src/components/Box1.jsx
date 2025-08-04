

import React from 'react';

function Box1() {
  return (
    <div className="relative bg-gradient-to-tl from-[#0e0f2c] via-[#270635] to-[#300825] flex flex-col items-center h-[800px] py-20">
      

      <div className="text-center">
        <h1 className="text-white text-6xl font-bold">
          Custom-built for <br />
          <span className="text-[#FF4433]">Frontend Devs</span>
        </h1>

        <h2 className="text-gray-300 text-2xl font-bold mt-8">
          Get instant feedback as you train and learn <br />
          through walkthroughs from senior engineers.
        </h2>
      </div>

      <div className="flex-grow" />


      <div className="absolute -bottom-10 bg-gradient-to-tl from-gray-700 to-black text-2xl font-mono rounded-xl shadow-lg px-32 py-12 text-white text-left w-fit mb-8">
        <pre className="leading-10">
          <ol className="list-decimal list-inside space-y-3">
            <li>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-400">you</span> ={" "}
              <span className="text-cyan-400">new FrontendEngineer()</span>
            </li>
            <li>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-400">clientside</span> ={" "}
              <span className="text-cyan-400">useClientside()</span>
            </li>
            <li>
              <span className="text-purple-400">const</span> {"{"}
              <span className="text-yellow-400">isInterviewReady</span>
              {"}"} = <span className="text-blue-400">you</span>
            </li>
            <li>
              <span className="text-pink-400">while</span> (!
              <span className="text-yellow-400">isInterviewReady()</span>)
            </li>
            <li className="ml-6">
              <span className="text-blue-400">you</span>.
              <span className="text-green-400">studyWith</span>(
              <span className="text-blue-400">clientside</span>)
            </li>
            <li>
              <span className="text-blue-400">you</span>.
              <span className="text-indigo-400">landDreamJob()</span>
            </li>
          </ol>
        </pre>
      </div>
    </div>
  );
}

export default Box1;
