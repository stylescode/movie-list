import React from 'react';

import AddMovie from '/client/src/components/AddMovie.jsx'
import Search from '/client/src/components/Search.jsx';
import MovieDatabase from '/client/src/components/MovieDatabase.js';
import MovieList from '/client/src/components/MovieList.jsx';

const App = () => {

  const [movies, setMovies] = React.useState(MovieDatabase);
  const [updated, setUpdated] = React.useState(true);
  const [currentFilter, setCurrentFilter] = React.useState('');

  const toggleStatus = (e, input) => {
    e.preventDefault();
    if (input.status === 'To Watch') {
      input.status = 'Watched';
    } else {
      input.status = 'To Watch';
    }
    setUpdated(!updated);
  }

  const toggleFilter = (event) => {
    let input = event.currentTarget.innerHTML;
    if (input === currentFilter) {
      setMovies(MovieDatabase);
      setCurrentFilter('');
      // remove background color
    } else {
      let filteredMovies = MovieDatabase.filter((movie) => {
        return movie.status === input;
      });
      setMovies(filteredMovies);
      setCurrentFilter(input);
      // add background color\
    }
  }

  const handleAdd = (e, input) => {
    e.preventDefault();
    let matches = MovieDatabase.filter((movie) => {
      return movie.title.toLowerCase() === input.toLowerCase();
    });
    if (matches.length === 0 && input.length !== 0) {
      MovieDatabase.push({title: input, status: 'To Watch'});
      setMovies([].concat(MovieDatabase));
    }
  }

  const handleSearch = (e, input) => {
    e.preventDefault();
    let filteredMovies = MovieDatabase.filter((movie) => {
      return movie.title.toLowerCase().includes(input.toLowerCase());
    })
    setMovies(filteredMovies);
    if (filteredMovies.length === 0) {
      alert('no movies found...');
    }
  }

  return (
    <div>
      <AddMovie handleAdd={handleAdd}/>
      <button onClick={(e) => toggleFilter(e)}>Watched</button>
      <button onClick={(e) => toggleFilter(e)}>To Watch</button>
      <Search handleSearch={handleSearch}/>
      <MovieList movies={movies} toggleStatus={toggleStatus}/>
    </div>
  )

}

export default App;