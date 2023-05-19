import React from 'react';
import Section from '../Elements/Section';
import setTitle from '../Utility/Common';

const Contact = () => {
    setTitle("Blitz | Contact");
    return (
        <div>
            <Section heading="Contact Us" preHeading="Blitz Toyz" >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
                    <div>
                        <img src="https://www.svgrepo.com/show/335242/people.svg" alt="" className='w-16' />
                        <p className="font-heading text-2xl underline underline-offset-8">In Person</p>
                        <p className='tetx-lg font-semibold underline underline-offset-4 mt-8'>NYC OFFICE</p>
                        <address className='grid grid-cols-2 max-w-max gap-x-12 gap-y-1'>
                            <p>Suite: #6B</p>
                            <p>Housing: 38</p>
                            <p>Block: D</p>
                            <p>Road: 221A</p>
                            <p>NYC, USA</p>
                        </address>
                        <p className='tetx-lg font-semibold underline underline-offset-4 mt-8'>Contact</p>
                        <p>Cell: +155-555-5555</p>
                        <p>Mail: hello@contact.zip</p>
                        <div className='flex justify-between mt-6'>
                            <button className='px-12 py-2 rounded bg-primary hover:bg-h-primary transition text-white'>Book a Meeting</button>
                            <button className='px-12 py-2 rounded bg-primary hover:bg-h-primary transition text-white'>Book a Tour</button>
                        </div>
                    </div>
                    <div className=''>
                        <img src="https://cdn-icons-png.flaticon.com/512/2767/2767188.png" className='w-16 mb-4' />
                        <p className="font-heading text-2xl underline underline-offset-8">Online</p>
                        <div className='grid grid-cols-2 gap-x-4 gap-y-2 my-4'>
                            <label htmlFor="name">
                                <p>Your Name:</p>
                                <input type="text" className='border border-gray-300 w-full px-2' />
                            </label>
                            <label htmlFor="subject">
                                <p>Your Email:</p>
                                <input type="text" className='border border-gray-300 w-full px-2' />
                            </label>
                            <label htmlFor="subject">
                                <p>Subject:</p>
                                <input type="text" className='border border-gray-300 w-full px-2' />
                            </label>
                            <label htmlFor="subject">
                                <p>Category:</p>
                                <input type="text" className='border border-gray-300 w-full px-2' />
                            </label>
                            <label htmlFor="message" className='col-span-2'>
                                <p>Message:</p>
                                <textarea type="text" className='border border-gray-300 w-full h-24 resize-none p-2' />
                            </label>
                            <button className='col-span-2 bg-primary hover:bg-h-primary transition rounded py-2 text-white'>Send Email</button>
                            <div className='flex gap-4 mt-6'>
                                <p className='h-12 w-12 flex items-center justify-center cursor-pointer'>
                                    <img src="https://www.svgrepo.com/show/183607/facebook.svg" alt="" className='h-8' />
                                </p>
                                <p className='h-12 w-12 flex items-center justify-center cursor-pointer'>
                                    <img src="https://www.pngrepo.com/png/49959/512/twitter.png" alt="" className='h-8' />
                                </p>
                                <p className='h-12 w-12 flex items-center justify-center cursor-pointer'>
                                    <img src="https://www.svgrepo.com/show/110195/linkedin.svg" alt="" className='h-8' />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Contact;