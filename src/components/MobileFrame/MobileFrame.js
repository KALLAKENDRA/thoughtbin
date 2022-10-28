import React from 'react';
import insideframe from '../Assets/Image/insideframe.png';
import mobfrane from '../Assets/Image/mobframe.png';

const MobileFrame = () => {
  return (
    <>
     <div className='lg:mt-0'>
     <div className='ml-10 relative z-20'> <img className='w-60 h-465 relative z-10' src={mobfrane} alt="" />
    <img className='relative h-410 w-56 -mt-430 ml-2' src={insideframe} alt="" /></div>
    <div className=" w-80 h-80  rounded-full  bg-gradient-to-r from-topaz via-white to-aquagreen opacity-75  shadow-3xl -mt-410 "></div>

    </div>
    
    </>
  )
}

export default MobileFrame