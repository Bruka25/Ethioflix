import React, { useEffect, useState } from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import avengers from './images2/avengers.jpg'
import panther from './images2/panther.jpg'
import us from './images2/us.jpg'
import batman from './images2/batman.jpg'
import ensaro from './images2/ensaro.jpg'
import yeadis from './images2/yeadisababa.png'
import fourhundred from './images2/400.jpg'
import friends from './images2/friends.jpg'
import besintu from './images2/besintu.jpg'
import yewendoch from './images2/yewguday.jpg'
import zetenegnaw from './images2/zetenegnaw.jpg'
import useFetch from './useFetch';

const Home = () => {
    const [bannerImages, setBannerImages] = useState([])
    const { error, isPending, data: moviesBannerImages } = useFetch('http://localhost:8000/moviesBannerImages');
    useEffect(() => {
        if (moviesBannerImages) {
            const imagesArray = moviesBannerImages.map(image => ({
                url: require(`${image.url}`)
            }));
            console.log(imagesArray);
            setBannerImages(imagesArray);
        }
    }, [moviesBannerImages]);

  return (
    <div className='home_content'>
        <div>
        {
            moviesBannerImages 
            &&
            <SimpleImageSlider
            width='100%'
            height={500}
            images={bannerImages}
            showNavs={true}
            autoPlay={true}
            />
        }
        </div>
        <div className="home_trending">
        <div><h3>EthioFlix Home Of Movies</h3></div>
        <div className="trending">
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

export default Home;
