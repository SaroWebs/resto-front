import React from 'react'
import {IoPersonOutline , IoAppsSharp , IoNotificationsOutline, IoHomeOutline } from "react-icons/io5";

const BottomNav = () => {
    let menuitems = [
        {
            id:1,
            name:'home',
            icon:<IoHomeOutline className='w-8 h-8' />,
            url:'/',
        },
        {
            id:2,
            name:'categories',
            icon:<IoAppsSharp  className='w-8 h-8'  />,
            url:'',
        },
        {
            id:3,
            name:'notifications',
            icon:<IoNotificationsOutline  className='w-8 h-8' />,
            url:'',
        },
        {
            id:4,
            name:'account',
            icon:<IoPersonOutline  className='w-8 h-8' />,
            url:'',
        },
    ];
    console.log(menuitems);
    return (
        <div className='absolute bottom-0 left-0 right-0 z-50 border-t shadow-md p-4'>
            <div className="flex justify-around items-center gap-4">
                {menuitems.map(item=>(
                    <span key={item.id} className='flex flex-col items-center gap-2 uppercase text-xs'>
                        {item.icon}
                        {item.name} 
                    </span>
                ))}
            </div>
        </div>
    )
}

export default BottomNav
