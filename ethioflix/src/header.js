import React from "react";
import { Link } from "react-router-dom";

function Header() {
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
        <button>
          <Link to="/logout">Log out</Link>
        </button>
      </div>
    </nav>
  );
}

export default Header;
