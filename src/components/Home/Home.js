import React from 'react'
import Navbar from '../shared/Navbar/Navbar'

const Home = () => {
  return (
    <>
   <div className='h-screen w-screen overflow-hidden bg-white'> <Navbar/>
    <div className='flex flex-col'>
      <div className=' w-122 h-120 rounded-full  bg-gradient-to-r from-caribbeangreen to-easternblue shadow-3xl -ml-7'></div>
      <div className=' w-122 h-120 rounded-full  bg-gradient-to-r from-caribbeangreen to-easternblue shadow-3xl mt-96'></div>
      <div className=' w-470 h-465 rounded-full  bg-gradient-to-r from-caribbeangreen to-easternblue shadow-3xl -mt-400 ml-20'></div>
      <div className=' w-345 h-410 rounded-full  bg-gradient-to-r from-caribbeangreen to-easternblue shadow-3xl  ml-auto -mr-44 mt-10 rotate-45'></div>
     
     
    </div></div>

    <div className='relative z-10 -mt-11'><p>helo bangladesh</p></div>
    </>
  )
}

export default Home