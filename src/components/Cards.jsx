import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Cards() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  const testimonials = [
    {
      name: "Rory M.",
      role: "Software Engineer at ",
      company: "QueryLayer",
      image: "/Squirral.png",
      text: "Solving Leetcode puzzles might be great for learning algos but it won't prepare you for that type of interview and it doesn't teach you anything about React internals. Clientside is an incredible solution and I have been recommending it to the developer community every time someone mentions practicing front-end."
    },
    {
      name: "Zile C.",
      role: "Engineer at ",
      company: "Weavechain",
      image: "/Pangtree.png",
      text: "Clientside is AMAZING. The problems are engaging but challenging. It's been a great learning experience and has become a regular study tool for me. The problems are reflective of actual frontend technical interviews, so it never gets old. I would HEAVILY recommend it."
    },
    {
      name: "Mucahit Y.",
      role: "Software Engineer at ",
      company: "Hubspot",
      image: "/OIP.webp",
      text: "The exercises are super interactive and come straight from real-life interviews, so it feels like you're really getting a taste of what to expect. Plus, it helped me fill in a lot of the knowledge gaps I didn't even know I had."
    },
    {
      name: "Albert C.",
      role: "Frontend Engineer",
      company: "",
      image: "/Cartoon.webp",
      text: "I have worked as a front-end developer for two years, yet I still find some of the \"Easy\" questions to be challenging… I highly recommend Clientside to anyone who is interested in tackling more practical coding challenges."
    }
  ];

  return (
    <div className="  sm:px-4 lg:px-48">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
        {testimonials.map(({ name, role, company, image, text }) => (
          <div key={name} className="bg-white shadow-md p-6 rounded-lg h-full flex flex-col justify-between">

            <div className="flex items-center space-x-4 mb-4">
              <img
                src={image}
                alt={name}
                className="w-16 h-16 rounded-full"
                data-aos="zoom-out"
              />
              <div>
                <a href="/">
                  <h5 className="text-blue-500 font-bold text-xl sm:text-2xl hover:underline">{name}</h5>
                </a>
                <p className="text-gray-600">
                  {role}
                  {company && (
                    <a className="text-blue-500 hover:underline">{company}</a>
                  )}
                </p>
              </div>
            </div>

            <p className="text-black text-base sm:text-lg">{text}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-20">
        <button
          type="button"
          className="text-2xl sm:text-3xl font-bold rounded-md px-8 sm:px-12 py-3 shadow-xl text-white"
          style={{ backgroundColor: "rgb(66, 133, 245)" }}
        >
          Start Training-Free >>
        </button>
      </div>
    </div>
  );
}

export default Cards;



