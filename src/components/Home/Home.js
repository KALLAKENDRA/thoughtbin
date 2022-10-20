import React from "react";
import barq from "../Assets/Image/barq.png";
import insideframe from "../Assets/Image/insideframe.png";
import mobframe from "../Assets/Image/mobframe.png";
import Navbar from "../shared/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <div className="h-screen w-screen overflow-hidden bg-white">
        {" "}
        <Navbar />
        <div className="flex flex-col ">
          <div className=" w-122 h-120 rounded-full  bg-gradient-to-r from-caribbeangreen to-easternblue shadow-3xl -ml-7"></div>
          <div className=" w-122 h-120 rounded-full  bg-gradient-to-r from-caribbeangreen to-easternblue shadow-3xl mt-96"></div>
          <div className=" w-470 h-465 rounded-full  bg-gradient-to-r from-caribbeangreen to-easternblue shadow-3xl -mt-400 ml-20"></div>
          <div className=" w-345 h-410 rounded-full  bg-gradient-to-r from-caribbeangreen to-easternblue shadow-3xl  ml-auto -mr-44 mt-10 rotate-45 "></div>
        </div>
      </div>

      <div className="ml-40 ">
        <div className="relative z-0">
          <div className="relative  z-10 ml-4  -mt-400 w-299">
            <img className="" src={insideframe} alt="" />
          </div>
          <div>
            <img className="h-626 -mt-730" src={mobframe} alt="" />
          </div>
        </div>
        <div className="relative z-10 -mt-1000 w-604 flex flex-col items-center gap-5 ml-auto">
          <h2 className="text-4xl mb-10">
            India’s first free Education Platform
          </h2>
          <p>
            Many novice writers tend to make a sharp distinction between content
            and style, thinking that a paper can be strong in one and weak in
            the other, but focusing on organization shows how content and style
            converge in deliberative academic writing
          </p>
          <button className="bg-easternblue py-2 px-48 rounded-2xl h-14 text-2xl text-white">
            Download
          </button>
          <p>Scan to Get App</p>
          <img className="w-134 h-134" src={barq} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
