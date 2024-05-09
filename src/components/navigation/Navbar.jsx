import React from 'react'
import { FaUser } from "react-icons/fa";

const Navbar = (props) => {
    const { setIsSidebar } = props;
    return (
        <div className='flex items-center justify-between py-3 px-4 md:px-24 shadow-md'>
            <div className="left flex gap-4 items-center">
                <button onClick={()=>setIsSidebar(true)}>Open</button>
            </div>
            <div className="right flex gap-4 items-center">
                {/* cart with badge */}
                {/* notification */}
                <div className="rounded-full p-2 border">
                    <FaUser />
                </div>
            </div>
        </div>
    )
}

export default Navbar
