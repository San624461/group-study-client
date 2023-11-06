import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/Navbar/NavBar';
import Footer from '../Components/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;