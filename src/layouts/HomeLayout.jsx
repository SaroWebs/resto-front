
import React, { useState } from 'react'
import { Outlet } from "react-router-dom";

import Navbar from '../components/navigation/Navbar';
import BottomNav from '../components/navigation/BottomNav';

const HomeLayout = () => {

    return (
        <div className="relative w-full min-h-screen">
            <Navbar />
            <div className="my-16">
                <Outlet />
            </div>
            <BottomNav />
        </div>
    )
}

export default HomeLayout
