import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import ProductCard01 from './cards/ProductCard01';

const RecommendedSection = () => {
  const params = {
    slidesPerView: 2.5,
    spaceBetween: 20,
  };

  return (
    <div className="">
      <div className="flex justify-between items-center pt-6 px-6">
        <h2 className="text-l font-semibold">Recommended</h2>
        <button className="text-blue-500 hover:underline">View all</button>
      </div>

      <div className="p-4">
        <Swiper {...params}>
          {[1, 2, 3].map((item) => (
            <SwiperSlide key={item} className="bg-white shadow-md my-2 pb-2 rounded-lg overflow-hidden">
              <ProductCard01/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecommendedSection;
