import React from 'react';
// import axios
import axios from 'axios';


import AddMovie from '/client/src/components/AddMovie.jsx'
import Search from '/client/src/components/Search.jsx';

import MovieList from '/client/src/components/MovieList.jsx';

const App = () => {

  const [movies, setMovies] = React.useState([]);


  // this is how front end connects to back end
  React.useEffect(() => {
    // this is where I want initial ajax get request
    axios.get('/movies').then((response) => {
      // now update movie list with response
      setMovies(response.data);
    });
  }, []);

  // still need to figure out the form portion / adding a movie


  // perform get request first to update movies state
  // check that movie name doesn't already exist in state
  // if not do post request
  axios.post('/movies', movieInfoHere)

  const handleAdd = (event, input) => {
    event.preventDefault();
    let exists = false;
    movies.forEach((movie) => {
      if (movie.title.toLowerCase() === input.toLowerCase()) {
        exists = true;
      }
    })
    if (exists === false) {
      let movieToAdd = {
        title: input;
        status: false;
      }
      axios.post('/movies', movieToAdd).then((response) => {
        setMovies(movies + response);
      })
    }
  }








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

  // const handleAdd = (e, input) => {
  //   e.preventDefault();
  //   let matches = MovieDatabase.filter((movie) => {
  //     return movie.title.toLowerCase() === input.toLowerCase();
  //   });
  //   if (matches.length === 0 && input.length !== 0) {
  //     MovieDatabase.push({title: input, status: 'To Watch'});
  //     setMovies([].concat(MovieDatabase));
  //   }
  // }

  const handleSearch = (e, input) => {
    e.preventDefault();
    let filteredMovies = movies.filter((movie) => {
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