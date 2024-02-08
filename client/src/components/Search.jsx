import React from 'react';

const Search = ({ handleSearch }) => (
    <form>
      <input type='text' id='searchField' placeholder='Search...'/>
      <button onClick={(e) => handleSearch(e, document.getElementById('searchField').value)}>Go</button>
    </form>
)

export default Search;