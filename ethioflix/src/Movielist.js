const Movielist = ({ movies }) => {
  return (
    <div className="movieList">
      {movies.map(movie => (
        <div className="movie">
           <img key={movie.id} src={require(`${movie.imageUrl}`)} alt={movie.title} />
           <p>{movie.title}</p>
        </div>
      ))}
    </div>
  );
}
export default Movielist;
