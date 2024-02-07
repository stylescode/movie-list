import React from 'react';
import MovieListEntry from '/client/src/components/MovieListEntry.jsx';

const MovieList = ({ movies }) => {
  console.log({movies});

  return (
    <ul>
      {movies.map((movie) => (
        <MovieListEntry movie={movie} />
      ))}
    </ul>

  )

}

export default MovieList;