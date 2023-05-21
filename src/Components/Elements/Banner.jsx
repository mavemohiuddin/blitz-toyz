import React, { Children } from 'react';

const Banner = ({preHeading, heading, subHeading, content, image, children, extraClass}) => {
    return (
        <div className={`${extraClass} relative rounded overflow-hidden flex`}>
            <img src={image} alt="" className='absolute w-full h-full top-0 left-0 object-cover' />
            <div className='absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black to-transparent opacity-60'></div>
            <div className='w-full md:w-1/2 flex flex-col gap-1 relative z-10 px-4 md:px-20 py-10 mt-auto'>
                <p className='font-heaidng tracking-[5px] text-white'>{preHeading}</p>
                <p className='text-white font-bold text-5xl mb-6'>{heading}</p>
                <p className='font-heading text-white tracking-[3px] text-xl'>{subHeading}</p>
                <p>{content}</p>
                {children}
            </div>
        </div>
    );
};

export default Banner;