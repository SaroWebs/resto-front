import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const RecommendedSection = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center py-6 px-6">
        <h2 className="text-l font-semibold">Recommended</h2>
        <button className="text-blue-500 hover:underline">View all</button>
      </div>
      <div className="absolute top-30 right-10 p-1 bg-white rounded-full shadow-md z-50">
        <FaShoppingCart className="text-gray-500 w-6 h-6" />
      </div>
      <div className="p-4">
        <div className="recommended-list bg-white shadow-md rounded-lg overflow-hidden">
          <div className="image-box relative">
            <img
              src="https://img.freepik.com/premium-photo/cheesy-burger-delight-generative-ai_94628-5446.jpg?w=826"
              alt="Deluxe Burger"
              className="w-full h-64 object-cover"
            />
            <div className="form-check bookmark absolute top-2 right-2">
              <input
                className="form-check-input hidden"
                type="checkbox"
                id="flexCheckDefault1"
              />
              <label htmlFor="flexCheckDefault1" className="cursor-pointer text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </label>
            </div>
          </div>
          <div className="text-content p-4">
            <h6 className="title text-lg font-semibold">Deluxe Burger</h6>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.181 3.637a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.223a1 1 0 00-.364 1.118l1.18 3.637c.3.921-.755 1.688-1.54 1.118L10 13.287l-3.087 2.223c-.784.57-1.84-.197-1.54-1.118l1.181-3.637a1 1 0 00-.364-1.118L3.103 9.065c-.783-.57-.381-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.181-3.637z" />
                </svg>
                <h5 className="mb-0 ml-2 number text-lg">4.6</h5>
              </div>
              <div>
                <h5 className="mb-0 ml-2 text-primary text-lg">₹199</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedSection;
