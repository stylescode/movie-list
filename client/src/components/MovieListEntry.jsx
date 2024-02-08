import React from 'react';

const MovieListEntry = ({ movie, toggleStatus }) => (
    <div>
      <span>{movie.title}</span>
      <button onClick={(e) => toggleStatus(e, movie)}>{movie.status}</button>
    </div>
)

export default MovieListEntry;