import React from "react";

import apps from '../Assets/Apps/app-release.apk';
import barq from "../Assets/Image/barq.png";
import logo from '../Assets/Image/logo.png';
import MobileFrame from "../MobileFrame/MobileFrame";

const Home = () => {
  return (
    <>
      <div className="h-600 w-screen overflow-hidden  bg-white">
        
        {/* <Navbar /> */}
        <div className="flex flex-col ">
          
          <div className=" w-122 h-120 rounded-full  bg-gradient-to-r from-caribbeangreen to-easternblue shadow-3xl -ml-7 mt-32"></div>
          <div className=" w-122 h-120 rounded-full  bg-gradient-to-r from-caribbeangreen to-easternblue shadow-3xl mt-60"></div>
         
          <div className=" w-345  h-410 rounded-full  bg-gradient-to-r from-caribbeangreen to-easternblue shadow-3xl  ml-auto -mr-40 -mt-44 rotate-45 "></div>
        </div>
      </div>


      <div className=" flex flex-col items-center  relative z-20 tablet:flex-row  justify-evenly  -mt-630 ">
      <div className= "flex flex-col items-center mt-10 tablet:-mt-2 lg:mt-10">
      <img className="w-64" src={logo} alt="" />
       <div><MobileFrame/></div>
      </div>
        <div className=" w-72  lg:w-604 flex flex-col items-center  relative z-10 lg:mt-10">
          <h2 className="text-lg font-bold  mt-24 ">
            India’s first free Education Platform
          </h2>
          <p className="text-justify">
            Many novice writers tend to make a sharp distinction between content
            and style, thinking that a paper can be strong in one and weak in
            the other, but focusing on organization shows how content and style
            converge in deliberative academic writing
          </p>
          <button className="bg-easternblue py-2 px-24 rounded-2xl h-14 text-2xl text-white mt-4">
          <a href={apps} download='../Assets/Apps/app-release.apk'>Download</a>
          </button>
         
          
          <p className="text-topaz font-bold mt-2">Or Scan to Get App</p>
          <img className="w-134 h-134 mt-4 mb-10" src={barq} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
