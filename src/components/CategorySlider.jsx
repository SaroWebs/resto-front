import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

let app_url = 'http://localhost:8000';

const CategorySlider = (props) => {
    let [categories, setCategories] = useState([]);
    let [isLoading, setIsLoading] = useState(true);


    const getCategories = () => {
        setIsLoading(true);
        axios.get(`${app_url}/api/categories`)
            .then(res => {
                let items = res.data.data.filter(dt => dt.is_root == 1);
                setCategories(items);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err.message);
                setIsLoading(false);
            });
    }

    useEffect(() => {
        getCategories();
    }, []);

    if(isLoading){
        // show skeleton 
        return "Loading...";
    }else if(categories.length < 1){
        return null;
    }


    return (
        <div className={categories.length < 6 ? 'px-8 py-4' : 'px-2 py-4' }>
            <Swiper
                slidesPerView={categories.length < 6 ? categories.length : 6}
                spaceBetween={10}
                className="mySwiper"
                draggable={true}
            >
                {categories ? categories.map(category => (
                    <SwiperSlide key={category.id}>
                        <a href={`/c/${category.id}`} className="flex flex-col items-center">
                            <img src={app_url + '/' + category.icon_url} alt={category.name} className="w-60" loading="lazy" />
                            <span className="text-xs font-semibold uppercase">{category.name}</span>
                        </a>
                    </SwiperSlide>
                )):''}
            </Swiper>
        </div>
    )
}

export default CategorySlider
