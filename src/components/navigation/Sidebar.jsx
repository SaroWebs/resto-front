import React from 'react';

const Sidebar = ({ isSidebar, setIsSidebar }) => {
  return (
    <div className={`absolute w-64 bg-white/80 top-0 bottom-0 ${isSidebar ? 'left-0 z-50' : '-left-64'} transition-all duration-300 flex flex-col`}>
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold">Menu</h2>
        <button onClick={() => setIsSidebar(false)} className="text-xl font-semibold">
          &times;
        </button>
      </div>
      <nav className="flex-grow p-4">
        <ul className="space-y-4">
          <li><a href="#" className="block text-lg">Home</a></li>
          <li><a href="#" className="block text-lg">About</a></li>
          <li><a href="#" className="block text-lg">Services</a></li>
          <li><a href="#" className="block text-lg">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
