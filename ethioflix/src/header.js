import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      // Clear the user data from local storage or session storage
      //localStorage.removeItem('user');
      // Redirect the user to the login page
      navigate("/login");
    }
  };

  return (
    <nav className="navbar">
      <h1>
        <Link to="/">EthioFLIX</Link>
      </h1>
      <div className="navtab">
        <Link to="/home">Home</Link>
        <div className="dropdown">
          <button className="dropbtn">
            <Link to="/movies">Movies</Link>
          </button>
          <div className="dropdown-content">
            <div className="home">
              <h4>Home</h4>
              <a href="/trendig">Trending</a>
              <a href="/popular">Popular</a>
              <a href="/upcoming">Upcoming</a>
            </div>
            <div className="genre">
              <h4>Genre</h4>
              <Link to="/movies/genre/action">Action</Link>
              <a href="/adventure">Adventure</a>
              <a href="/crime">Crime</a>
              <a href="/drama">Drama</a>
              <a href="/fantasy">Fantasy</a>
              <a href="/horror">Horror</a>
              <a href="/thriller">Thriller</a>
              <a href="/sci-fi">Sci-Fi</a>
            </div>
          </div>
        </div>
      </div>
      <div className="searchbar">
        <input type="text" placeholder="Search " />
        <button>
          <a href="/search">Search</a>
        </button>
      </div>
      <div className="auth">
        <button>
          <Link to="/login">Log in</Link>
        </button>
        <button onClick={handleLogout}>
          <Link to="/logout">Log out</Link>
        </button>
      </div>
    </nav>
  );
}

export default Header;
