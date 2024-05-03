import React from 'react'
import "./home.css"
import avengers from '../images/avengers.jpg'
import panther from '../images/panther.jpg'
import us from '../images/us.jpg'
import batman from '../images/batman.jpg'
import ensaro from '../images/ensaro.jpg'
import yeadis from '../images/yeadisababa.png'
import fourhundred from '../images/400.jpg'
import friends from '../images/friends.jpg'
import besintu from '../images/besintu.jpg'
import yewendoch from '../images/yewguday.jpg'
import zetenegnaw from '../images/zetenegnaw.jpg'

const Home = () => {
  return (
    <div>
      <header>
        <nav>
            <ul>
                <li>Home</li>
                    <li> 
                    <a href="#">Genre</a> 
                          <ul class="dropdown">
                        <li><a href="#">Action</a></li> 
                        <li><a href="#">Comedy</a></li>
                        <li><a href="#">Drama</a></li>
                    </ul>
                    </li>
                    <li>
                        <a href="#">Country</a>
                        <ul class="dropdown">
                            <a href="#">Ethiopia</a>
                            <a href="#">America</a>
                            <a href="#">UK</a>
                            <a href="#">South Africa</a>
                            <a href="#">Australia</a>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Category</a>
                        <ul class="dropdown">
                            <a href="#">Popular</a>
                            <a href="#">Highest Rating</a>
                            <a href="#">For Kids</a>
                            <a href="#">Feature</a>
                            <a href="#">Series</a>
                        </ul>
                    </li>
                <li>About</li>
            </ul>
        </nav>
        <button>Log In</button>
        <button>Sign Up</button>
    </header>
    <div class="home_trending">
        <div><h3>EthioFlix home of movies</h3></div>
        <div class="trending">
            <div>
                <img src={ensaro} alt="ensaro"/>
                <p>Ensaro</p>
            </div>
            <div>
                <img src={yeadis} alt="yeadis"/>
                <p>Yeadisababa Habtam</p>
            </div>
            <div>
                <img src={avengers} alt="avengers"/>
                <p>Avengers Infinity war</p>
            </div>
            <div>
                <img src={fourhundred} alt="fourhundred"/>
                <p>400 fikir</p>
            </div>
            <div>
                <img src={friends} alt="friends"/>
                <p>friends</p>
            </div>
            <div>
                <img src={besintu} alt="besintu"/>
                <p>Besintu</p>
            </div>
            <div>
                <img src={yewendoch} alt="yewendoch"/>
                <p>Yewendoch Guday</p>
            </div>
            <div>
                <img src={zetenegnaw} alt="zetenegnaw"/>
                <p>zetenegnaw shi</p>
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
    <footer>Ethioflix</footer>
    </div>
  )
}

export default Home
