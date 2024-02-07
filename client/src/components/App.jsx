import React from 'react';

import MovieDatabase from '/client/src/components/MovieDatabase.js'

const App = (props) => {

  const [movies, setMovies] = React.useState(MovieDatabase);


  return (
    <div>Hello World!</div>


  )

}

export default App;