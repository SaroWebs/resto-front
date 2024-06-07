import React, { useState } from 'react'
import { FaUser, FaShoppingCart, FaBell, FaBars } from "react-icons/fa";
import Sidebar from './Sidebar';
import { useCart } from 'react-use-cart';

const Navbar = (props) => {
    const [isSidebar, setIsSidebar] = useState(false);
    const {totalUniqueItems} = useCart();
    const handleOpenSidebar = () => {
        setIsSidebar(!isSidebar);
    }

    return (
        <>
        <div className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-3 px-4 md:px-24 bg-white shadow-md'>
            <div className="left flex gap-4 items-center">
                <button onClick={handleOpenSidebar}>
                    <FaBars />
                </button>
            </div>
            <div className="right flex gap-4 items-center">
                <div className="rounded-full p-2 border">
                    <FaBell />
                </div>
                <div className="rounded-full p-2 border">
                    <FaShoppingCart />({totalUniqueItems})
                </div>
                <div className="rounded-full p-2 border">
                    <FaUser />
                </div>
            </div>
        </div>
        <Sidebar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
        </>
    )
}

export default Navbar
