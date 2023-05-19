import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Utility/AuthProvider';

const Footer = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='px-4 py-12 bg-gray-700 text-white'>
            <div className='max-w-[1170px] w-full mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 border-b pb-6 mb-6'>
                <div className='col-span-2 md:col-span-1 flex flex-col gap-2'>
                    <Link to="/" onClick={()=>{window.scrollTo(0, 0)}} >
                        <img src='./logo.png' className='w-40 mb-4'/>
                    </Link>
                    <p>Blitz Toyz is a leading toy selling brand, dedicated to delivering top-quality toys that inspire imagination and bring joy to children worldwide</p>
                    <div className='flex gap-4'>
                        <p className='h-12 w-12 flex items-center justify-center cursor-pointer bg-opacity-100 bg-white hover:bg-opacity-80 transition border rounded-full'>
                            <img src="https://www.svgrepo.com/show/183607/facebook.svg" alt="" className='h-6' />
                        </p>
                        <p className='h-12 w-12 flex items-center justify-center cursor-pointer bg-opacity-100 bg-white hover:bg-opacity-80 transition border rounded-full'>
                            <img src="https://www.pngrepo.com/png/49959/512/twitter.png" alt="" className='h-6' />
                        </p>
                        <p className='h-12 w-12 flex items-center justify-center cursor-pointer bg-opacity-100 bg-white hover:bg-opacity-80 transition border rounded-full'>
                            <img src="https://www.svgrepo.com/show/110195/linkedin.svg" alt="" className='h-6' />
                        </p>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-heading text-xl tracking-widest underline underline-offset-8 mb-6'>Navigate</p>
                    <Link to="/alltoyz" className='hover:text-gray-500 transition'>All Toyz</Link>
                    <Link to="/blogz" className='hover:text-gray-500 transition'>Blogz</Link>
                    <Link to="/about" className='hover:text-gray-500 transition'>About Us</Link>
                    <Link to="/contact" className='hover:text-gray-500 transition'>Contact Us</Link>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-heading text-xl tracking-widest underline underline-offset-8 mb-6'>Customize</p>
                    {user ?
                    <>
                        <Link to="/" className='hover:text-gray-500 transition'>My Profile</Link>
                        <Link to="/mytoyz" className='hover:text-gray-500 transition'>My Toys</Link>
                        <Link to="/addtoy" className='hover:text-gray-500 transition'>Add a Toy</Link>
                    </>
                    :
                    <p>Please log in</p>}
                </div>
            </div>
            <div className='max-w-[1170px] w-full mx-auto'><p>@Copyright 2023 | Blitz Toyz | All Copyright reserved</p></div>
        </div>
    );
};

export default Footer;