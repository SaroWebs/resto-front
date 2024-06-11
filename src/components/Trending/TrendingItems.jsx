import React from 'react'
import TrendingItem from './TrendingItem'

const TrendingItems = () => {
    return (
        <div>
            <div className="flex justify-between items-center pt-6 px-6">
                <h2 className="text-l font-semibold">Trending Items</h2>
            </div>
            {[1, 2, 3].map(i => (
                <TrendingItem />
            ))}
            <div className="border border-blue-600 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mx-4">
                <div className="text-blue-500 text-center py-2 cursor-pointer hover:text-white">
                    View All
                </div>
            </div>
        </div>
    )
}

export default TrendingItems
