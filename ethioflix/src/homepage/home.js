import React from 'react'
import "./home.css"
import avengers from './images/avengers.jpg'
import panther from './images/panther.jpg'
import us from './images/us.jpg'
import batman from './images/batman.jpg'


function Home () {
  return (
    <div>
    <header>
        <nav>
            <ul>
                <li>Home</li>
                <li>Genre</li>
                <li>Category</li>
                <li>About</li>
            </ul>
        </nav>
        <button>Sign Up</button>
    </header>
    <div className="home_trending">
        <div><h3>Trending</h3></div>
        <div className="trending">
            <div>
                <img src={avengers} alt="avengers"/>
                <p>Avengers Infinity war</p>
            </div>
            <div>
                <img src={panther} alt="panther"/>
                <p>Black Panther</p>
            </div>
            <div>
                <img src={batman} alt="batman"/>
                <p>Batman</p>
            </div>
            <div>
                <img src={us} alt="us"/>
                <p>Us</p>
            </div>
        </div>
    </div>
    <div className="popular">
        <div>
            <img src={avengers} alt="avengers"/>
            <p>Avengers Infinity war</p>
        </div>
        <div>
            <img src={panther} alt="panther"/>
            <p>Black Panther</p>
        </div>
        <div>
            <img src={batman} alt="batman"/>
            <p>Batman</p>
        </div>
        <div>
            <img src={us} alt="us"/>
            <p>Us</p>
        </div>
        <div>
            <img src={avengers} alt="avengers"/>
            <p>Avengers Infinity war</p>
        </div>
        <div>
            <img src={panther} alt="panther"/>
            <p>Black Panther</p>
        </div>
        <div>
            <img src={batman} alt="batman"/>
            <p>Batman</p>
        </div>
        <div>
            <img src={us} alt="us"/>
            <p>Us</p>
        </div>
        <div>
            <img src={avengers} alt="avnegers"/>
            <p>Avengers Infinity war</p>
        </div>
        <div>
            <img src={panther} alt="panther"/>
            <p>Black Panther</p>
        </div>
        <div>
            <img src={batman} alt="batman"/>
            <p>Batman</p>
        </div>
        <div>
            <img src={us} alt="us"/>
            <p>Us</p>
        </div>
    </div>
    <footer>Ethioflix</footer>
    </div>
  )
}

export default Home;
