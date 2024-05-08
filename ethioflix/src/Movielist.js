const Movielist = ({ images }) => {
  return (
    <div className="movieList">
      {images.map(image => (
        <div className="movie">
           <img key={image.id} src={require(`${image.url}`)} alt={image.title} />
           <p>{image.title}</p>
        </div>
      ))}
    </div>
  );
}
export default Movielist;
