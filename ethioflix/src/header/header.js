import React from 'react'
import './header.css'
function Header() {
  return (
    <header>
       <nav>
            <ul>
                <li>Home</li>
                    <li> 
                    <a href="#">Genre</a> 

                    </li>
                    <li>
                        <a href="#">Country</a>   
                    </li>
                    <li>
                        <a href="#">Category</a>
                    </li>
                <li>About</li>
            </ul>
        </nav>
        <button>Log In</button>
        <button>Sign Up</button>
    </header>
  )
}

export default Header
