import React, { useState } from 'react';

const SearchBar = ({ searchTerm, onChange, onSearch }) => {
  const [searchTermInput, setSearchTermInput] = useState('');

  const handleInputChange = (event) => {
    setSearchTermInput(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTermInput);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTermInput}
        onChange={handleInputChange}
        placeholder="Search by description"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
