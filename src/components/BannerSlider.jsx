import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination } from 'swiper/modules';

const BannerSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
    >
      <SwiperSlide>
        <div className="card add-banner bg-secondary">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="card-body">
            <div className="card-info">
              <span>Happy Weekend</span>
              <h2 data-text="60% OFF" className="title m-t10">60% OFF</h2>
              <small>*for All Menus</small>
            </div>
          </div>
        </div>  
      </SwiperSlide>
      <SwiperSlide>
        <div className="card add-banner bg-secondary">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="card-body">
            <div className="card-info">
              <span>Happy Weekend</span>
              <h2 data-text="60% OFF" className="title m-t10">60% OFF</h2>
              <small>*for All Menus</small>
            </div>
          </div>
        </div>  
      </SwiperSlide>
      {/* Add more SwiperSlide components as needed */}
    </Swiper>
  );
};

export default BannerSlider;
