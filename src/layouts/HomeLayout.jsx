
import React, { useEffect, useState } from 'react'
import Navbar from '../components/navigation/Navbar';
import CategorySlider from '../components/CategorySlider';
import BottomNav from '../components/navigation/BottomNav';
import SearchBar from '../components/SearchBar';
import BannerSlider from '../components/BannerSlider';

const HomeLayout = (props) => {
   
    let [appError, setAppError] = useState({
        hasError: false,
        message: '',
        type: ''
    });



    const clearError = () => {
        setAppError({
            hasError: false,
            message: '',
            type: ''
        })
    }

    return (
        <div className="relative w-full min-h-screen">
            <Navbar/>
            {appError.hasError && (
                <div className="w-full text-center py-3 bg-red-200/90 absolute top-2 left-0 right-0">
                    <h3 className="uppercase text-xl text-red-800">{appError.type} ERROR</h3>
                    <span className="text-xs text-red-600">{appError.message}</span>
                </div>
            )}

            <div className="px-4">
                <SearchBar />
            </div>
            <CategorySlider clearError={clearError} setAppError={setAppError} />
            <BannerSlider/>
            <BottomNav />
        </div>
    )
}

export default HomeLayout
