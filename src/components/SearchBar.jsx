import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log('Search query:', query);
  };

  return (
    <div className="flex items-center w-full border rounded-full p-2 bg-white my-5 mt-20">
      <CiSearch className="text-gray-400 ml-2" />
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="flex-grow ml-2 outline-none"
      />
      <button onClick={handleSearch} className="hidden">Search beverages & food</button>
    </div>
  );
};

export default SearchBar;
