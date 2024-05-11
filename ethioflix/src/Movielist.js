import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div className="movieList">
      {movies.map((movie) => (
        <div className="movie" key={movie.id}>
          <Link to={`${movie.youtube}`}>
            <img src={require(`${movie.imageUrl}`)} alt={movie.title} />
          </Link>
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
