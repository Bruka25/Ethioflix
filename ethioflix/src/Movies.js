import React from 'react'
import useFetch from './useFetch'
import Movielist from './Movielist'

function Movies() {
  const { error, isPending, data: movies } = useFetch('http://localhost:8000/movies');
  return (
    <div className='moviesContent'>
          <h1 className='moviesHeader'>Ethioflix Movies</h1>
            {movies && <Movielist movies={movies}/>}
    </div>
  )
}

export default Movies;
