import React from 'react'
import CategorySlider from '../components/CategorySlider'
import BannerSlider from '../components/BannerSlider'
import RecommendedSection from '../components/RecommendedSection'
import TrendingItems from '../components/Trending/TrendingItems'

const Home = (props) => {
    return (
        <div>

            <CategorySlider />
            <BannerSlider /> {/* todo */}
            <RecommendedSection />

            <TrendingItems/>

            <div className="border border-blue-600 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mx-4">
                <div className="text-blue-500 text-center py-2 cursor-pointer hover:text-white">
                    View All
                </div>
            </div>


        </div>
    )
}

export default Home
