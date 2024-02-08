import React from 'react';
import MovieListEntry from '/client/src/components/MovieListEntry.jsx';

const MovieList = ({ movies, toggleStatus }) => (
    <div>
      {movies.map((movie) => (
        <MovieListEntry key={movie.title} movie={movie} toggleStatus={toggleStatus}/>
      ))}
    </div>
)

export default MovieList;