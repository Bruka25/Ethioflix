import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <nav className="navbar">
        <h1>Ethioflix</h1>
        <div className="navtab">
            <a href="/">Home</a>
            <div className="dropdown">
                <button className="dropbtn">Category</button>
                <div className="dropdown-content">
                    <div className="home">
                        <h4>Home</h4>
                        <a href="#">Trending</a>
                        <a href="#">Popular</a>
                        <a href="#">Upcoming</a>
                    </div>
                    <div className="genre">
                        <h4>Genre</h4>
                        <a href="#">Action</a>
                        <a href="#">Adventure</a>
                        <a href="#">Crime</a>
                        <a href="#">Drama</a>
                        <a href="#">Fantasy</a>
                        <a href="#">Horror</a>
                        <a href="#">Thriller</a>
                        <a href="#">Sci-Fi</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="searchbar">
            <input type="text" placeholder="Search " />
            <button><a href="">Search</a></button>
        </div>
        <div className="auth">
            <button><a href="">Log in</a></button>
            <button><a href="">Sign up</a></button>
        </div>
    </nav>
  )
}

export default Header;