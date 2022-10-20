import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <><div className="navbar bg-base-100 flex flex-row justify-evenly">
            <div className="">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        
                        <li><Link className='text-2xl text-oslogrey' to='/'>Home</Link></li>
                        <li><Link className='text-2xl text-oslogrey' to='/blog'>Blog</Link></li>
                        <li><Link className='text-2xl text-oslogrey' to='/download'>Download</Link></li>
                    </ul>
                </div>
                <div className="form-control flex flex-row items-center ">
                <i class="fa-solid fa-magnifying-glass relative z-20 ml-10 text-silversand"></i>
                    <input type="text" placeholder="Search" className=" relative z-10  rounded-lg text-right -ml-7 w-96 h-10 border-silversand border-2 px-6 text-lg font-bold " />
                </div>





            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                <li><Link className='text-2xl text-oslogrey' to='/'>Home</Link></li>
                        <li><Link className='text-2xl text-oslogrey' to='/blog'>Blog</Link></li>
                        <li><Link className='text-2xl text-oslogrey' to='/download'>Download</Link></li>
                </ul>
            </div>

        </div></>
    )
}

export default Navbar