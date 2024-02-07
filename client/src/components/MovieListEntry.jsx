import React from 'react';

const MovieListEntry = ({ movie }) => {
  console.log({movie});

  return (
    <li>{movie.title}</li>
  )



}


export default MovieListEntry;