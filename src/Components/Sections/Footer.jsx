import React from 'react';

const Footer = () => {
    return (
        <div className='px-4 py-12 bg-gray-700 text-white'>
            <div className='max-w-[1170px] w-full mx-auto grid grid-cols-3 gap-8'>
                <div className='flex flex-col gap-2'>
                    <p>logo</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tempore, assumenda totam pariatur doloremque commodi.</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p>Menu Name</p>
                    <p>Menu</p>
                    <p>Menu</p>
                    <p>Menu</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p>Menu Name</p>
                    <p>Menu</p>
                    <p>Menu</p>
                    <p>Menu</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;