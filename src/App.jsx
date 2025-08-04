import React from "react";
import Navbar from "./components/Navbar";
import activisionLogo from "./assets/activision-logo.png";
import controllerIcon from "./assets/controller-icon.png";
import Content from "./components/Content";
import Box1 from "./components/Box1";
import Cards from "./components/Cards";
import Content2 from "./components/Content2";
import Box2 from "./components/Box2";

function App() {
  return (
    <div className=" bg-gray-100">
      <Navbar />
      <div className="flex flex-wrap bg-gray-100 pt-36 flex-col justify-center items-center ">
        <h1 className="mb-4 text-6xl text-center text-black font-sans font-bold">
          A new way to prep <br /> for frontend jobs.
        </h1>

        <h2 className="text-center text-black font-sans text-lg mb-4">
          Solve Javascript exercises and build React coding projects from actual
          frontend interviews.
        </h2>

        <div className="self-center">
          <button
            type="button"
            className="text-3xl font-sans font-bold rounded-md px-12 py-3 shadow-xl text-white"
            style={{ backgroundColor: "rgb(66, 133, 245)" }}
          >
            Start Training-Free >>
          </button>
        </div>

        <p className="text-black mt-8 text-lg text-center">
          Trusted by <span className="font-semibold">2,542+</span> Web Engineers
        </p>

        <div className="flex flex-wrap mt-4 gap-6 justify-center items-center">
          <h1 className="text-black font-bold text-2xl">Google</h1>
          <img
            src={activisionLogo}
            alt="Activision-style Logo"
            className="h-8"
          />
          <h1 className="text-black font-bold text-3xl">lyr</h1>
          <img src={controllerIcon} alt="Controller Icon" className="h-14" />
        </div>
        <div>
          <h1 className="mt-16 mb-16 text-7xl text-black font-sans font-bold self-start">
            Frontend interview prep
            <br />
            can be summed up in
            <br />
            three words
          </h1>

          <h1 className="text-5xl mb-16 text-right text-black font-sans font-bold leading-snug self-end">
            scattered, confusing, and time- <br />
            consuming.
          </h1>
        </div>
<div className="flex flex-col items-start w-3/5 space-y-10">
  <h1 className="text-3xl text-black font-sans leading-snug">
    Just finding relevant problems to practice with is a challenging task.
  </h1>

  <h1 className="text-3xl text-black font-sans leading-snug">
    Usually, it involves hours of scouring through
    <span className="italic"> YouTube videos, Medium articles, and blog posts.</span>
    And even if you find a good practice problem, it's tough to know if you're
    meeting all the edge cases or have the best solution an employer may be looking for.
  </h1>

  <h1 className="text-3xl text-black font-sans leading-snug mb-28">
    This all-too-common process unnecessarily{" "}
    <span className="font-bold">strains you mentally</span> and eats up
    <span className="font-bold"> time better spent actually practicing…</span>
  </h1>
</div>
        <div>
          <h1 className="text-5xl mb-16 text-right text-black font-sans italic font-semibold leading-snug self-end">
            …which is precisely why
            <br />
            <span className="text-6xl not-italic">Clientside</span> was created…
          </h1>
        </div>
      </div>
      <Box1/>
        <div className="flex  bg-gray-100 flex-col flex-wrap justify-center items-center">
        <h1 className="text-black font-sans font-bold text-7xl mt-36 leading-1 ">Interactive<br></br>Learning</h1>
        <h1 className="text-gray-600 font-sans font-medium text-2xl mt-10 mb-36 leading-snug ml-11">Practice without any setup in our<br></br> interactive code playground. All the <br></br>tools & starter code you need are<br></br> already there.</h1>
        </div>
      <Content/>
      <Cards></Cards>
      <Content2/>
      <Box2/>
      <footer className=" bg-gray-100 p-14"><hr className="mt-8"></hr>
      <p className="mt-4 font-bold text-gray-600">© 2023 Clientside, LLC.</p></footer>
    </div>
  );
}

export default App;

