/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className='flex flex-col gap-4 items-center justify-center min-h-screen'>
            <div className=''>
                <p className='font-play px-8 pt-8 pb-16 text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent1 to-accent3'>Oops!</p>
            </div>
            <p>Unfortunately, we couldn't find the page you are looking for.</p>
            <Link to="/" className='px-4 py-2 rounded transition bg-primary hover:bg-h-primary text-white'>Back To Home</Link>
        </div>
    );
};

export default Error404;