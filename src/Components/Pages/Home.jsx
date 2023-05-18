import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Elements/Banner';
import Section from '../Elements/Section';
import setTitle from '../Utility/Common';

const Home = () => {
    setTitle("Blitz Toyz");
    return (
        <div>
            <Section>
                <Banner
                preHeading="Work Hard Play Hard"
                heading="Best Action Figure Collectable"
                subHeading="Choose from our massive collection"
                image="https://i.pinimg.com/originals/b2/ff/02/b2ff020a299e78c92fe626a0221d3517.jpg"
                extraClass="pt-32"
                >
                    <div className='flex items-center'>
                        <Link to="/alltoyz" className='px-4 py-2 rounded transition border border-gray-600 text-white bg-primary hover:bg-h-primary'>View All Toyz</Link>
                    </div>
                </Banner>
            </Section>
            <Section
            preHeading="Expert Choices"
            heading="Explore the best collection">
                <div className='grid grid-cols-3 gap-8'>
                    
                </div>
            </Section>
        </div>
    );
};

export default Home;