import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    // Handle change in input tag
  };

  return (
    <form>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for movies..."
      />
    </form>
  );
};

export default SearchBar;
