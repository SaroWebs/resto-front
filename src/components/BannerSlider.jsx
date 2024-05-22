import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

// Import required modules
import { Navigation, Pagination } from 'swiper/modules';
let app_url = 'http://localhost:8000';
let offbanners = [
  {
    id: 1,
    image_url: '/images/banner/off-ban1.png',
    link: '/',
    type: 'offer',
  },
  {
    id: 2,
    image_url: '/images/banner/off-ban2.png',
    link: '/',
    type: 'offer',
  },
  {
    id: 3,
    image_url: '/images/banner/off-ban3.png',
    link: '/',
    type: 'offer',
  },
];

const BannerSlider = () => {
  return (
    <div className='px-2'>
      {
        offbanners.length > 0 ?
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
          >
            {offbanners.map(offbanner => (

              <SwiperSlide key={offbanner.id}>
                <div className="card add-banner bg-secondary">
                  <img src={app_url + offbanner.image_url} alt="" className='w-full' />
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
          : ''
      }
    </div>
  );
};

export default BannerSlider;
