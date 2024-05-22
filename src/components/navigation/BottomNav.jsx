import React from 'react'
import {IoPersonOutline , IoAppsSharp , IoReorderFourSharp , IoNotificationsOutline, IoHomeOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";

const BottomNav = () => {
    let menuitems = [
      {
        id: 1,
        // name: 'home',
        icon: <IoHomeOutline className='w-6 h-6' />,
        url: '/',
      },
      {
        id: 2,
        // name: 'categories',
        icon: <IoAppsSharp className='w-6 h-6' />,
        url: '/',
      },
      {
        id: 3,
        // name: 'categories',
        icon: <TbReportAnalytics  className='w-6 h-6' />,
        url: '/',
      },
      {
        id: 4,
        // name: 'favourite',
        icon: <MdOutlineFavoriteBorder  className='w-6 h-6' />,
        url: '/',
      },
      {
        id: 5,
        // name: 'account',
        icon: <IoPersonOutline className='w-6 h-6' />,
        url: '/',
      },
    ];
  
    console.log(menuitems);
  
    return (
      <div className='fixed bottom-0 left-0 right-0 z-50 border-t shadow-md p-4 bg-cyan-700'>
        <div className="flex justify-around items-center gap-4 text-gray-300">
          {menuitems.map((item) => (
            <span key={item.id} className='flex flex-col items-center gap-2 uppercase text-xs'>
              {item.icon}
              {item.name}
            </span>
          ))}
        </div>
      </div>
    );
  }
  
  export default BottomNav;
