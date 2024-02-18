import React, { сhildren } from 'react';
import Navbar from '../ui/Navbar/Navbar';
import Topbar from '../ui/Topbar/Topbar';

const Layout = ({ children }) => {
    return (
        <>
            <Topbar />
            <div className="app-layout">
                {children}
            </div>
            <Navbar type="user" />
        </>
    );
}

export default Layout;
