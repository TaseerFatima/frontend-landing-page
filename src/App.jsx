import React from "react";
import Navbar from "./components/Navbar";
import activisionLogo from "./assets/activision-logo.png";
import controllerIcon from "./assets/controller-icon.png";
import Content from "./components/Content";
import Box1 from "./components/Box1";
import Cards from "./components/Cards";
import Content2 from "./components/Content2";
import Box2 from "./components/Box2";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {
  
useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: true,     
  });
}, []);

  return (
    <div className="">
      <Navbar />
       <div className=" flex flex-wrap pt-36 flex-col justify-center items-center ">
        
        <h1  className="relative mb-4 text-6xl text-center text-black font-sans font-bold ">
          A new way to prep <br /> for frontend jobs.
        </h1>

        <h2 className="text-center text-black font-sans text-lg mb-4">
          Solve Javascript exercises and build React coding projects from actual
          frontend interviews.</h2>
<img src="unnamed.png" className="h-80 absolute -right-0 bottom-14 translate-y-10 animate-bounce"/>
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
          <h1 data-aos="fade-right" className="mt-16 mb-16 text-7xl text-black font-sans font-bold self-start">
            Frontend interview prep
            <br />
            can be summed up in
            <br />
            three words
          </h1>

          <h1 data-aos="fade-left" className="text-5xl mb-16 text-right text-black font-sans font-bold leading-snug self-end">
            scattered, confusing, and time- <br />
            consuming.
          </h1>
        </div>
{/* TEXT SECTION */}
<div data-aos="fade-down" className="flex flex-col items-start w-full sm:w-4/5 lg:w-3/5 space-y-8 px-4 sm:px-0">
  <h1 className="text-xl sm:text-2xl md:text-3xl text-black font-sans leading-snug">
    Just finding relevant problems to practice with is a challenging task.
  </h1>

  <h1 data-aos="fade-down" className="text-xl sm:text-2xl md:text-3xl text-black font-sans leading-snug">
    Usually, it involves hours of scouring through
    <span className="italic"> YouTube videos, Medium articles, and blog posts.</span>
    And even if you find a good practice problem, it's tough to know if you're
    meeting all the edge cases or have the best solution an employer may be looking for.
  </h1>

  <h1 data-aos="fade-down" className="text-xl sm:text-2xl md:text-3xl text-black font-sans leading-snug mb-20">
    This all-too-common process unnecessarily{" "}
    <span className="font-bold">strains you mentally</span> and eats up
    <span className="font-bold"> time better spent actually practicing…</span>
  </h1>
</div>

<div className="w-full px-4 sm:px-0">
  <h1 data-aos="fade-left" className="text-3xl sm:text-4xl md:text-5xl text-black font-sans italic font-semibold leading-snug text-center lg:text-right mb-16">
    …which is precisely why
    <br />
    <span className="text-4xl sm:text-5xl md:text-6xl not-italic">Clientside</span> was created…
  </h1>
</div>

      </div>
      <Box1/>
      <Content/>
      <Cards></Cards>
      <Content2/>
      <Box2/>
      <footer className="  p-8 mx-16  "><hr className="mt-8"></hr>
              <p className="text-sm sm:text-base flex justify-between font-bold">
          © {new Date().getFullYear()} Clientside, LLC.
          <a href="/" target="_blank" rel="noopener noreferrer" className="inline-block ml-4">
            <img src="/Tiktok.webp" alt="TikTok Logo" className="w-5 h-5 inline" />
          </a>
        </p></footer>
    </div>
  );
}

export default App;




