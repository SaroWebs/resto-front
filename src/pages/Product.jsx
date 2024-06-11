import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Product = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const product = {
        name: "Delicious Pasta",
        brief: "A delightful plate of pasta with rich tomato sauce and a hint of basil.",
        images: [
            "https://www.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_7677643.htm#fromView=search&page=1&position=0&uuid=5999c635-e2e3-42be-8189-dbe218909144",
            "https://www.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_7677638.htm#fromView=search&page=1&position=1&uuid=5999c635-e2e3-42be-8189-dbe218909144",
            "https://www.freepik.com/free-photo/pasta-with-tomato-sauce-served-bowl_40796509.htm#fromView=search&page=1&position=2&uuid=5999c635-e2e3-42be-8189-dbe218909144"
        ],
        ingredients: ["Pasta", "Tomato Sauce", "Basil", "Cheese"],
        originalPrice: 199,
        offerPrice: 149,
        nutritionalInfo: {
            calories: 450,
            protein: "12g",
            carbs: "65g",
            fat: "15g"
        },
        reviews: [
            { user: "Virat Kohli", rating: 5, comment: "Amazing taste!" },
            { user: "Izaz kohli", rating: 4, comment: "Very good, but a bit salty." }
        ]
    };

    const discountPercentage = ((product.originalPrice - product.offerPrice) / product.originalPrice * 100).toFixed(0);

    const nextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % product.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + product.images.length) % product.images.length);
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };


    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="relative">
                <img src={product.images[currentImageIndex]} alt="Product" loading='lazy' className="w-full h-64 object-cover rounded-md" />
                <button onClick={prevImage} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full">&#10094;</button>
                <button onClick={nextImage} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full">&#10095;</button>
            </div>
            <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
            <p className="text-gray-700 mt-2">{product.brief}</p>
            <div className="mt-6 flex items-center">
                <span className="text-2xl font-bold text-gray-900">₹{product.offerPrice}</span>
                <span className="text-lg text-gray-500 line-through ml-2">₹{product.originalPrice}</span>
                <span className="text-lg text-green-500 ml-2">({discountPercentage}% off)</span>
            </div>
            <div className="flex gap-6">
                <div className="mt-4 flex items-center">
                    <button onClick={decreaseQuantity} className="bg-gray-300 text-gray-800 px-3 py-1 rounded-l-md">-</button>
                    <span className="px-4 py-1 border-t border-b border-gray-300">{quantity}</span>
                    <button onClick={increaseQuantity} className="bg-gray-300 text-gray-800 px-3 py-1 rounded-r-md">+</button>
                </div>
                <div className="mt-4">
                    <button className="bg-green-500 text-white px-4 py-1 rounded-md font-semibold">Add to Cart</button>
                </div>
            </div>

            <div className="mt-4">
                <h2 className="text-2xl font-semibold">Ingredients</h2>
                <ul className="list-disc list-inside">
                    {product.ingredients.map((ingredient, index) => (
                        <li key={index} className="text-gray-700">{ingredient}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-4">
                <h2 className="text-2xl font-semibold">Nutritional Information</h2>
                <p className="text-gray-700">Calories: {product.nutritionalInfo.calories}</p>
                <p className="text-gray-700">Protein: {product.nutritionalInfo.protein}</p>
                <p className="text-gray-700">Carbs: {product.nutritionalInfo.carbs}</p>
                <p className="text-gray-700">Fat: {product.nutritionalInfo.fat}</p>
            </div>
            <div className="mt-4">
                <h2 className="text-2xl font-semibold">Customer Reviews</h2>
                {product.reviews.map((review, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-md mt-2">
                        <p className="text-gray-900 font-bold">{review.user}</p>
                        <p className="text-yellow-500">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</p>
                        <p className="text-gray-700">{review.comment}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Product
