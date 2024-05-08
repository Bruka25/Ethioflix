import React from 'react'
import avengers from './images2/avengers.jpg'
import panther from './images2/panther.jpg'
import us from './images2/us.jpg'
import batman from './images2/batman.jpg'
import ensaro from './images2/ensaro.jpg'
import yeadis from './images2/yeadisababa.png'
import fourhundred from './images2/400.jpg'
import friends from './images2/friends.jpg'
import besintu from './images2/besintu.jpg'
import yewendoch from './images2/yewguday.jpg'
import zetenegnaw from './images2/zetenegnaw.jpg'
import useFetch from './useFetch'
import Movielist from './Movielist'

function Genre() {
  const { error, isPending, data: images } = useFetch('http://localhost:8000/images');
  return (
    <div>
          <h1>Movies by Genre</h1>
      <div className="movie-list">
          <div className="genre">
            {images && <Movielist images={images}/>}
          </div>
      </div>
    </div>
  )
}

export default Genre;
