import React from 'react';

const AddMovie = ({ handleAdd }) => (
    <form>
      <input type='text' id='addMovieField' placeholder='Add movie here...'/>
      <button onClick={(e) => handleAdd(e, document.getElementById('addMovieField').value)}>Add</button>
    </form>
)

export default AddMovie;