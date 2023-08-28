import { useStateContext } from '../../context/SearchQueryCtx';
// import { useState } from 'react';

function Search() {
  const { searchQuery, setSearchQuery } = useStateContext();

  const handleInputChange = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        value={searchQuery}
        placeholder="Search"
        onChange={handleInputChange}
      />
      <button>Search</button>
    </form>
  );
}

export default Search;
