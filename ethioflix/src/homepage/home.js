import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
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
    const sliderImages = [
        {
           url: avengers,
        },
        {
           url: batman,
        },
        {
           url: panther,
        }
     ];
  return (
    <div className='home_content'>
        <div>
         <SimpleImageSlider
            width='100%'
            height={500}
            images={sliderImages}
            showNavs={true}
            autoPlay={true}
         />
        </div>
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
    </div>
  )
}

export default Home
