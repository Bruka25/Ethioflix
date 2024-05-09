import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header>
       <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                    <li> 
                    <Link to="/genre">Genre</Link> 

                    </li>
                    <li>
                        <Link to="/country">Country</Link>   
                    </li>
                    <li>
                        <Link to="/category">Category</Link>
                    </li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
        <Link to="/login">
          <button style={{ display: 'inline-block' }}>Log In</button>
        </Link>
        <Link to="/signup">
          <button style={{ display: 'inline-block' }}>Sign Up</button>
        </Link>
    </header>
  )
}

export default Header;