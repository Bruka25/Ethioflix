import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './home.css';
import avengers from '../images/avengers.jpg';
import panther from '../images/panther.jpg';
import us from '../images/us.jpg';
import batman from '../images/batman.jpg';
import ensaro from '../images/ensaro.jpg';
import yeadis from '../images/yeadisababa.png';
import fourhundred from '../images/400.jpg';
import friends from '../images/friends.jpg';
import besintu from '../images/besintu.jpg';
import yewendoch from '../images/yewguday.jpg';
import zetenegnaw from '../images/zetenegnaw.jpg';

const Home = () => {
  return (
    <div>
      <div className="home_trending">
        <div>
          <h3>EthioFlix home of movies</h3>
        </div>
        <div className="trending">
          <div>
            <Link to="https://www.youtube.com/watch?v=RfXkCXMv2qw">
              <img src={ensaro} alt="ensaro" />
            </Link>
            <p>Ensaro</p>
          </div>
          <div>
            <Link to="https://www.youtube.com/watch?v=-kittse6FQU">
              <img src={yeadis} alt="yeadis" />
            </Link>
            <p>Yeadisababa Habtam</p>
          </div>
          <div>
            <Link to="/avengers">
              <img src={avengers} alt="avengers" />
            </Link>
            <p>Avengers Infinity war</p>
          </div>
          <div>
            <Link to="/fourhundred">
              <img src={fourhundred} alt="fourhundred" />
            </Link>
            <p>400 fikir</p>
          </div>
          <div>
            <Link to="/friends">
              <img src={friends} alt="friends" />
            </Link>
            <p>Friends</p>
          </div>
          <div>
            <Link to="/besintu">
              <img src={besintu} alt="besintu" />
            </Link>
            <p>Besintu</p>
          </div>
          <div>
            <Link to="/yewendoch">
              <img src={yewendoch} alt="yewendoch" />
            </Link>
            <p>Yewendoch Guday</p>
          </div>
          <div>
            <Link to="/zetenegnaw">
              <img src={zetenegnaw} alt="zetenegnaw" />
            </Link>
            <p>Zetenegnaw shi</p>
          </div>
          <div>
            <Link to="">
              <img src={panther} alt="panther" />
            </Link>
            <p>Black Panther</p>
          </div>
          <div>
            <Link to="/batman">
              <img src={batman} alt="batman" />
            </Link>
            <p>Batman</p>
          </div>
          <div>
            <Link to="/us">
              <img src={us} alt="us" />
            </Link>
            <p>Us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
