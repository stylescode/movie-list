import React from 'react';

const Search = ({ handleSearch }) => {
  return (
    <form>
      <input type='text' id='searchField' name='searchField' placeholder='Search...'/>
      <button onClick={(e) => handleSearch(e, document.getElementById('searchField').value)}>GO!</button>
    </form>

  )
}

export default Search;