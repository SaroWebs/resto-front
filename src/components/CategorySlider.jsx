import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const CategorySlider = (props) => {
    let [categories, setCategories] = useState([]);
    let [isLoading, setIsLoading] = useState(true);


    const getCategories = () => {
        setIsLoading(true);
        props.clearError();
        axios.get('http://localhost:8000/api/categories')
            .then(res => {
                setCategories(res.data);
                setIsLoading(false);
            })
            .catch(err => {
                props.setAppError({
                    hasError: true,
                    message: err.message,
                    type: 'server',
                });
                setIsLoading(false);
            });
    }
    useEffect(() => {
        getCategories();
    }, []);
    return (
        <div className={categories.length < 6 ? 'px-16 py-4' : 'px-2 py-4' }>
            <Swiper
                slidesPerView={categories.length < 6 ? categories.length : 6}
                spaceBetween={10}
                className="mySwiper"
                draggable={true}
            >
                {categories.map(category => (
                    <SwiperSlide key={category.id}>
                        <a href={`/c/${category.id}`} className="flex flex-col items-center">
                            <img src={category.image_url} alt={category.name} className="w-60" loading="lazy" />
                            <span className="text-xs font-semibold uppercase">{category.name}</span>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CategorySlider
