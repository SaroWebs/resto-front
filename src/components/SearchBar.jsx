import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log('Search query:', query);
  };

  return (
    <div className="flex items-center w-full border rounded-full p-2 bg-white my-5">
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
