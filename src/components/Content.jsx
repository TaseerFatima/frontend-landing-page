import React,{useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect,useRef } from "react";
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';

function Content() {

    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


    const [showSurprise , setShowSurprise] = useState(false);
    const [width, height] = useWindowSize(); // screen width & height

    const [showConfetti, setShowConfetti] = useState(false);

    const confettiRef = useRef(null);
const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

useEffect(() => {
  if (confettiRef.current) {
    const { offsetWidth, offsetHeight } = confettiRef.current;
    setContainerSize({ width: offsetWidth, height: offsetHeight });
  }
}, [showConfetti]);



    const handleClick = ()=>{
      setShowSurprise(true);
       setShowConfetti(true);

         setTimeout(() => {
    setShowConfetti(false); // stop confetti after 5 seconds
  }, 5000);
    }


  return (
<div>
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }

          .fade-in {
            animation: fadeIn 0.6s ease-out forwards;
          }
        `}
      </style>
        <div className="flex flex-col flex-wrap justify-center items-center">
        <h1 className="text-black font-sans font-bold text-7xl mt-36 leading-1 ">Interactive<br></br>Learning</h1>
        <h1 className="text-gray-600 font-sans font-medium text-2xl mt-10 mb-36 leading-snug ml-11">Practice without any setup in our<br></br> interactive code playground. All the <br></br>tools & starter code you need are<br></br> already there.</h1>
        </div>

      <div className="flex flex-col  items-center">
        <div className="flex items-center  mb-14">
      <img
        src="card.jpg"
        alt="image"
        className="w-auto rounded-lg h-[500px] "
      /></div>
      <div>
     <div data-aos="fade-up" className="flex flex-col items-start w-fit">
    <div className="w-12 h-12 rounded-full bg-blue-500 flex justify-center items-center ">
              <img
        src="blood-sample.png"
        alt="test tube"
        className="w-6 h-6"
      />
    </div>
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

<div className="flex flex-col gap-24 items-center mt-24">

  <div data-aos="fade-up" className="flex flex-col items-start w-fit">
    <div className="w-12 h-12 rounded-full bg-blue-500 flex justify-center items-center"><img
        src="target.png"
        alt="target"
        className="w-6 h-6"
      /></div>
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
  <div data-aos="fade-up" className="flex flex-col items-start w-fit">
    <div className="w-12 h-12 rounded-full bg-blue-500 flex justify-center items-center"><img
        src="outline.png"
        alt="outline"
        className="w-8 h-8"></img></div>
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
  <div data-aos="fade-up" className="flex flex-col items-start w-fit">
    <div className="w-12 h-12 rounded-full bg-blue-500 flex justify-center items-center"><img
        src="outline.png"
        alt="outline"
        className="w-8 h-8"
      /></div>
    <h1 className="text-black font-sans font-bold text-4xl mt-4">
      Top Questions
    </h1>
    <h2 className="text-gray-600 font-sans font-semibold text-xl mt-7 leading-snug">
      Study with the exact questions asked by top<br />
      companies. Leverage our database of<br />
      questions to give yourself an edge over the<br />
      competition and help you land your dream job.
    </h2>
      <div className="flex mt-10 item-center mb-32">
  <button className="px-7 font-semibold text-2xl py-2.5 bg-blue-500 rounded-lg text-white ">
    Start Training Now 🥊
  </button>
</div>
  </div>
  </div>

</div>

    <div className='mb-14 '>
        <h1 data-aos="zoom-in" className=" text-6xl text-center text-black font-sans font-bold">
        Congrats! You're going to<br></br> ace your next interview!
        </h1>
        <img src="/gift.gif" alt="Gift Animation" className="w-56 mt-4 h-56 mx-auto" />
     <div><div ref={confettiRef} className="relative w-full max-w-2xl mx-auto h-64 mt-8">
  {showConfetti && (
    <Confetti
      width={containerSize.width}
      height={containerSize.height}
      numberOfPieces={500}
      recycle={false}
    />
  )}
 <button onClick={handleClick} className="px-11 text-lg py-3 bg-red-600 shadow-lg rounded-lg text-white font-bold mx-auto block">
  Click for a Surprise ☺️
</button>
          {showSurprise && (
            <div className="text-2xl font-bold text-center mt-6 fade-in">
              10% Off Code Unlocked! 🎉
            </div>
          )}
</div>
</div>

</div>
</div>
  )
}

export default Content


