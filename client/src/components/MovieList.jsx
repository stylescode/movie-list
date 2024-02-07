const MovieList = ({ movies }) => {



  return (
    <ul>
      {movies.map((movie) => {
        <MovieListEntry movie={movie} />
      })}

    </ul>

  )

}