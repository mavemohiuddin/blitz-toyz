import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Bars3Icon } from '@heroicons/react/24/solid';
import setTitle from '../Utility/Common';

const Header = () => {
    const [navVisible, setNavVisible] = useState(false);
    const [profileVisible, setProfileVisible] = useState(false);
    const [profileHover, setProfileHover] = useState(false);

    return (
        <div className='h-20 px-4 py-2 border-b shadow-mg bg-white sticky top-0'>
            <div className='max-w-[1170px] w-full h-full mx-auto flex items-center justify-between relative'>
                <Link to="/" className='md:translate-y-4'>
                    <img src='./logo.png' className='w-32 md:w-52' />
                </Link>
                <ul className={`${navVisible?"translate-x-0":"translate-x-[120%]"} transition md:translate-x-0 md:flex gap-4 absolute md:static right-0 top-16 border md:border-0 rounded bg-white px-6 py-3`}>
                    <li className='py-2'>
                        <Link onClick={()=>{setNavVisible(false),setTitle("Blitz Toyz")}} to="/" className='px-4 py-2 rounded md:bg-primary md:bg-opacity-20 md:hover:bg-h-primary md:hover:bg-opacity-50 transition text-slate-800 hover:text-slate-400 md:hover:text-slate-800'>Blitz Toyz</Link>
                    </li>
                    <li className='py-2'>
                        <Link onClick={()=>{setNavVisible(false),setTitle("Blitz Toyz")}} to="/" className='px-4 py-2 rounded md:bg-primary md:bg-opacity-20 md:hover:bg-h-primary md:hover:bg-opacity-50 transition text-slate-800 hover:text-slate-400 md:hover:text-slate-800'>Home</Link>
                    </li>
                    <li className='py-2'>
                        <Link onClick={()=>{setNavVisible(false),setTitle("Blitz | All Toyz")}} to="/alltoyz" className='px-4 py-2 rounded md:bg-primary md:bg-opacity-20 md:hover:bg-h-primary md:hover:bg-opacity-50 transition text-slate-800 hover:text-slate-400 md:hover:text-slate-800'>All Toys</Link>
                    </li>
                    <li className='py-2'>
                        <Link onClick={()=>{setNavVisible(false),setTitle("Blitz | My Toyz")}} to="/mytoyz" className='px-4 py-2 rounded md:bg-primary md:bg-opacity-20 md:hover:bg-h-primary md:hover:bg-opacity-50 transition text-slate-800 hover:text-slate-400 md:hover:text-slate-800'>My Toyz</Link>
                    </li>
                    <li className='py-2'>
                        <Link onClick={()=>{setNavVisible(false),setTitle("Blitz | Add Toy")}} to="/addtoy" className='px-4 py-2 rounded md:bg-primary md:bg-opacity-20 md:hover:bg-h-primary md:hover:bg-opacity-50 transition text-slate-800 hover:text-slate-400 md:hover:text-slate-800'>Add a Toy</Link>
                    </li>
                    <li className='py-2'>
                        <Link onClick={()=>{setNavVisible(false),setTitle("Blitz | Blogz")}} to="/blogz" className='px-4 py-2 rounded md:bg-primary md:bg-opacity-20 md:hover:bg-h-primary md:hover:bg-opacity-50 transition text-slate-800 hover:text-slate-400 md:hover:text-slate-800'>Blogz</Link>
                    </li>
                </ul>
                <div className='relative ml-auto md:ml-0'>
                    <button onMouseEnter={()=>setProfileHover(true)} onMouseLeave={()=>setProfileHover(false)} onClick={()=>{setNavVisible(false),setProfileVisible(!profileVisible)}} className='px-4 py-2 mr-4 rounded transition bg-primary hover:bg-h-primary text-white'>Log in</button>
                    <div className={`${profileHover?"block":profileVisible?"block":"hidden"} absolute -right-6 md:right-auto md:left-1/2 top-full md:-translate-x-1/2 bg-white z-10 px-12 py-6 border rounded flex flex-col gap-4 items-center justify-center`}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJiCoNl3EO01AxqXlHfMgS22unf7K0484Szw&usqp=CAU' className='w-24 h-24 rounded-full border-8 overflow-hidden' />
                            <p className='font-play text-lg font-bold text-slate-600 whitespace-nowrap'>User Name</p>
                            <button onClick={()=>{setNavVisible(false),setProfileVisible(false)}} className='px-4 py-2 rounded bg-primary hover:bg-h-primary text-white transition'>Log out</button>
                        </div>
                </div>
                <button className='w-6 md:hidden' onClick={()=>{setNavVisible(!navVisible), setProfileVisible(false)}}>
                    <Bars3Icon></Bars3Icon>
                </button>
            </div>
        </div>
    );
};

export default Header;