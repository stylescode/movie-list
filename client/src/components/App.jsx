import React from 'react';

import MovieDatabase from '/client/src/components/MovieDatabase.js';
import Search from '/client/src/components/Search.jsx';
import MovieList from '/client/src/components/MovieList.jsx';


const App = () => {

  const [movies, setMovies] = React.useState(MovieDatabase);

  const handleSearch = (e, input) => {
    e.preventDefault();
    console.log(input);
    // filter movies from database based on input
    let filteredMovies = MovieDatabase.filter((movie) => {
      return movie.title.toLowerCase().includes(input.toLowerCase());
    })
    // use setMovies to update movies
    setMovies(filteredMovies);

  }


  return (
    <div>
      <Search handleSearch={handleSearch}/>
      <MovieList movies={movies} />

    </div>

  )

}

export default App;