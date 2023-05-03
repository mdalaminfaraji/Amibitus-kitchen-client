import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;