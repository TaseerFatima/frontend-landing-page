import React from 'react'

function Content() {
  return (
<div>
<div className="flex flex-col  items-center">
  <div className="flex flex-col items-start w-fit">
    <div className="w-12 h-12 rounded-full bg-blue-500"></div>

    <h1 className="text-black font-sans font-bold text-4xl mt-4">
      Test Suites
    </h1>

    <h2 className="text-gray-600 font-sans font-semibold text-xl mt-7 leading-snug">
      No more second-guessing your solutions or <br />
      wondering if you “got it right”. Check your work <br />
      immediately against a suite of tests for each <br />
      problem.
    </h2>
  </div>
</div>


{/* Reusable Style Applied to All 3 Sections */}
<div className="flex flex-col gap-24 items-center mt-24">
  {/* --- Block 1 --- */}
  <div className="flex flex-col items-start w-fit">
    <div className="w-12 h-12 rounded-full bg-blue-500"></div>
    <h1 className="text-black font-sans font-bold text-4xl mt-4">
      Targeted Practice
    </h1>
    <h2 className="text-gray-600 font-sans font-semibold text-xl mt-7 leading-snug">
      Full-code solutions and easy-to-understand<br />
      walkthroughs will help you understand the<br />
      inner workings of a problem. This is invaluable<br />
      when it comes to job interviews, where you<br />
      need to demonstrate your understanding of<br />
      the problem.
    </h2>
  </div>

  {/* --- Block 2 --- */}
  <div className="flex flex-col items-start w-fit">
    <div className="w-12 h-12 rounded-full bg-blue-500"></div>
    <h1 className="text-black font-sans font-bold text-4xl mt-4">
      Senior Solutions
    </h1>
    <h2 className="text-gray-600 font-sans font-semibold text-xl mt-7 leading-snug">
      The most targeted and quick practice. Learning<br />
      to implement infinite scroll? Don't worry about<br />
      finding a paginated API or writing<br />
      any boilerplate. The problems' starter code already<br />
      has you covered.
    </h2>
  </div>

  {/* --- Block 3 --- */}
  <div className="flex flex-col items-start w-fit">
    <div className="w-12 h-12 rounded-full bg-blue-500"></div>
    <h1 className="text-black font-sans font-bold text-4xl mt-4">
      Top Questions
    </h1>
    <h2 className="text-gray-600 font-sans font-semibold text-xl mt-7 leading-snug">
      Study with the exact questions asked by top<br />
      companies. Leverage our database of<br />
      questions to give yourself an edge over the<br />
      competition and help you land your dream job.
    </h2>
      <div className="flex mt-10 justify-start mb-32">
  <button className="px-7 font-semibold text-2xl py-2.5 bg-blue-500 rounded-lg text-white ">
    Start Training Now 🥊
  </button>
</div>
  </div>

</div>


    <div className='mb-32 '>
        <h1 className=" text-6xl text-center text-black font-sans font-bold">
        Congrats! You're going to<br></br> ace your next interview!
        </h1>
        <img src="/gift.gif" alt="Gift Animation" className="w-56 mt-4 h-56 mx-auto" />
      <button className="px-11 text-lg py-3 bg-red-600 shadow-lg rounded-lg text-white font-bold mx-auto block">
  Click for a Surprise ☺️
</button>

</div>

</div>
  )
}

export default Content







