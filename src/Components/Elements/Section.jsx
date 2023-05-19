import React from 'react';

const Section = ({preHeading, heading, subHeading, extraClass, children}) => {
    return (
        <section className={`${extraClass} py-12 px-4 overflow-hidden`}>
            <div className='max-w-[1170px] w-full mx-auto'>
                <p className='text-center capitalize font-bold text-primary'>{preHeading}</p>
                <p className='text-center capitalize font-extralight font-thin text-gray-700 text-5xl'>{heading}</p>
                <p className='text-center capitalize max-w-xl mx-auto mb-4'>{subHeading}</p>
                {children}
            </div>
        </section>
    );
};

export default Section;