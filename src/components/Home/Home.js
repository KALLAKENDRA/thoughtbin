import React from "react";

import apps from '../Assets/Apps/app-release.apk';
import barq from "../Assets/Image/barq.png";
import MobileFrame from "../MobileFrame/MobileFrame";
import Navbar from "../shared/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <div className="h-screen w-screen overflow-hidden bg-white">
        
        <Navbar />
        <div className="flex flex-col ">
          <div className=" w-122 h-120 rounded-full  bg-gradient-to-r from-caribbeangreen to-easternblue shadow-3xl -ml-7"></div>
          <div className=" w-122 h-120 rounded-full  bg-gradient-to-r from-caribbeangreen to-easternblue shadow-3xl mt-96"></div>
         
          <div className=" w-345  h-410 rounded-full  bg-gradient-to-r from-caribbeangreen to-easternblue shadow-3xl  ml-auto -mr-40 mt-10 rotate-45 "></div>
        </div>
      </div>

      {/* <div className=" flex justify-evenly items-center  -mt-1000"> */}

      <div className=" flex flex-col tablet:flex-row tablet:-mt-960  desktopSm:-mt-784 desktopMd:-mt-960 desktopLg:-mt-960 justify-evenly items-center  -mt-880">
       <div><MobileFrame/></div>
        <div className=" mt-24 w-72 flex flex-col items-center relative z-10">
          <h2 className="text-lg font-bold mb-10 mt-20 ">
            India’s first free Education Platform
          </h2>
          <p>
            Many novice writers tend to make a sharp distinction between content
            and style, thinking that a paper can be strong in one and weak in
            the other, but focusing on organization shows how content and style
            converge in deliberative academic writing
          </p>
          <button className="bg-easternblue py-2 px-24 rounded-2xl h-14 text-2xl text-white mt-4">
          <a href={apps} download='../Assets/Apps/app-release.apk'>Download</a>
          </button>
         
          
          <p className="text-topaz font-bold mt-14">Or Scan to Get App</p>
          <img className="w-134 h-134 mt-4 mb-10" src={barq} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
