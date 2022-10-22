import React from 'react';
import insideframe from '../Assets/Image/insideframe.png';
import mobfrane from '../Assets/Image/mobframe.png';

const MobileFrame = () => {
  return (
    <>
     <div className='mt-20'>
     <div className='ml-10 relative z-20'> <img className='w-60 h-512 relative z-10' src={mobfrane} alt="" />
    <img className='relative h-465 w-56 -mt-496 ml-3' src={insideframe} alt="" /></div>
    <div className=" w-80 h-80  rounded-full  bg-gradient-to-r from-topaz via-white to-aquagreen opacity-75  shadow-3xl -mt-420 ml-0"></div>

    </div>
    
    </>
  )
}

export default MobileFrame