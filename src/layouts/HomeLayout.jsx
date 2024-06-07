
import React, { useState } from 'react'
import { Outlet } from "react-router-dom";

import Navbar from '../components/navigation/Navbar';
import BottomNav from '../components/navigation/BottomNav';
import SearchBar from '../components/SearchBar';

const HomeLayout = () => {

    return (
        <div className="relative w-full min-h-screen">
            <Navbar />

            <div className="px-4">
                <SearchBar />
            </div>
            <div className="my-8">
                <Outlet/>
            </div>
            <BottomNav />
        </div>
    )
}

export default HomeLayout
