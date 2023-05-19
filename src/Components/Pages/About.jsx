/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Banner from '../Elements/Banner';
import Section from '../Elements/Section';

const About = () => {
    return (
        <Section heading="About Us" preHeading="Blitz Toyz">
            <div className='max-w-4xl mx-auto w-full'>
                <p>Blitz Toyz is a visionary brand dedicated to curating an extraordinary world of play and imagination for children of all ages. With an unwavering commitment to quality and innovation, we offer a wide range of captivating toys that ignite creativity, inspire exploration, and foster endless hours of fun. From classic favorites to the latest cutting-edge designs, our collection is thoughtfully curated to spark joy, stimulate learning, and create cherished memories.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 mt-8 gap-8'>
                    <img src="https://i.ytimg.com/vi/YmRZyBUmwt8/maxresdefault.jpg" className="h-60" />
                    <p>At Blitz Toyz, we believe that toys have the power to unlock boundless potential in every child. That's why we meticulously select toys that encourage imaginative play, promote cognitive development, and nurture social interactions. Our team of toy enthusiasts is passionate about delivering exceptional products that meet the highest safety standards and bring smiles to children's faces. With Blitz Toyz, you can trust that each toy is designed to provide endless entertainment, ignite curiosity, and contribute to the growth and happiness of young minds. Experience the magic of play with Blitz Toyz and embark on an unforgettable journey of adventure, learning, and pure delight.</p>
                </div>
            </div>
        </Section>
    );
};

export default About;