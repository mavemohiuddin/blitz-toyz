import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Sections/Footer';
import Header from './Sections/Header';

const Template = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Template;