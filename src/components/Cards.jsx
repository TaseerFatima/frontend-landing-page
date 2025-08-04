import React from "react";

function Cards() {
  return (
    <div className=" bg-gray-100"> 
    <div className="row row-cols-1 row-cols-md-2 justify-center items-center  flex mb-16 mx-44 g-4">
<div className="col">
  <div className="card h-100 bg-white shadow-md p-6 rounded-lg">
    
    {/* Profile Block */}
    <div className="flex items-center space-x-4 mb-4">
      <img
        src="/Squirral.png"
        alt="Cute Squirrel"
        className="w-16 h-16 rounded-full"
      />
      
      <div>
        <a href="/">
          <h5 className="text-blue-500 font-bold text-2xl hover:underline">
            Rory M.
          </h5>
        </a>
        <p className="text-gray-600">
          Software Engineer at{" "}
          <a className="text-blue-500 hover:underline">QueryLayer</a>
        </p>
      </div>
    </div>

    {/* Testimonial Text */}
    <p className="text-black text-lg">
      Solving Leetcode puzzles might be great for 
      learning algos but it won't prepare you for that type 
      of interview and it doesn't teach you anything 
      about React internals. Clientside is an incredible 
      solution and I have been recommending it to the 
      developer community every time someone 
      mentions practicing front-end.
    </p>
    
  </div>
</div>

<div className="col">
  <div className="card h-100 bg-white shadow-md p-6 rounded-lg">
    
    {/* Profile Block */}
    <div className="flex items-center space-x-4 mb-4">
      <img
        src="/Pangtree.png"
        alt="Cute pangtree"
        className="w-16 h-16 rounded-full"
      />
      
      <div>
        <a href="/">
          <h5 className="text-blue-500 font-bold text-2xl hover:underline">
            Zile C.
          </h5>
        </a>
        <p className="text-gray-600">
          Engineer at{" "}
          <a className="text-blue-500 hover:underline">Weavechain</a>
        </p>
      </div>
    </div>

    {/* Testimonial Text */}
    <p className="text-black text-lg">
      Clientside is AMAZING. The problems are engaging  
      but challenging. It's been a great learning  
      experience and has become a regular study tool  
      for me. The problems are reflective of actual  
      frontend technical interviews, so it never gets old. I  
      would HEAVILY recommend it. 
    </p>
    
  </div>
</div>

<div className="col">
  <div className="card h-100 bg-white shadow-md p-6 rounded-lg">
    
    {/* Profile Block */}
    <div className="flex items-center space-x-4 mb-4">
      <img
        src="/OIP.webp"
        alt="Cute "
        className="w-16 h-16 rounded-full"
      />
      
      <div>
        <a href="/">
          <h5 className="text-blue-500 font-bold text-2xl hover:underline">
           Mucahit Y.
          </h5>
        </a>
        <p className="text-gray-600">
          Software Engineer at{" "}
          <a className="text-blue-500 hover:underline">Hubspot</a>
        </p>
      </div>
    </div>

    {/* Testimonial Text */}
    <p className="text-black text-lg">
      The exercises are super interactive and come  
      straight from real-life interviews, so it feels like  
      you're really getting a taste of what to expect. Plus, 
      it helped me fill in a lot of the knowledge gaps I  
      didn't even know I had.
    </p>
    
  </div>
</div>

<div className="col">
  <div className="card h-100 bg-white shadow-md p-6 rounded-lg">
    
    {/* Profile Block */}
    <div className="flex items-center space-x-4 mb-4">
      <img
        src="/Cartoon.webp"
        alt="Squirrel"
        className="w-16 h-16 rounded-full"
      />
      
      <div>
        <a href="/">
          <h5 className="text-blue-500 font-bold text-2xl hover:underline">
            Albert C.
          </h5>
        </a>
        <p className="text-gray-600">
          Frontend Engineer
        </p>
      </div>
    </div>

    {/* Testimonial Text */}
    <p className="text-black text-lg">
     I have worked as a front-end developer for two  
      years, yet I still find some of the "Easy" questions to  
      be challenging… I highly recommend Clientside to  
      anyone who is interested in tackling more practical 
      coding challenges. 
    </p>
    
  </div>
</div>

        <div className="self-center">
          <button
            type="button"
            className="text-3xl font-sans font-bold rounded-md mt-16 px-12 py-3 shadow-xl text-white"
            style={{ backgroundColor: "rgb(66, 133, 245)" }}
          >
            Start Training-Free >>
          </button>
        </div>
</div>
    </div>
  );
}

export default Cards;
