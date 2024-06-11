import React from 'react'
import TrendingItem from './TrendingItem'

const TrendingItems = () => {
    return (
        <div>
            <div className="flex justify-between items-center pt-6 px-6">
                <h2 className="text-l font-semibold">Trending Items</h2>
            </div>
            {[1,2,3].map(i=>(
                <TrendingItem />
            ))}
            
        </div>
    )
}

export default TrendingItems
