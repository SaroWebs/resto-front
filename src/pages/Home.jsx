import React from 'react'
import CategorySlider from '../components/CategorySlider'
import BannerSlider from '../components/BannerSlider'
import RecommendedSection from '../components/RecommendedSection'
import TrendingItems from '../components/Trending/TrendingItems'
import SearchBar from '../components/SearchBar'

const Home = (props) => {
    
    return (
        <div className='mb-16'>
            <div className="px-4">
                <SearchBar />
            </div>

            <CategorySlider />
            <BannerSlider /> {/* todo */}
            <RecommendedSection />
            <TrendingItems/>
        </div>
    )
}

export default Home
