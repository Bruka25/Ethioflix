import SimpleImageSlider from "react-simple-image-slider";
import avenger from './images/avengers.jpg'
import batman from './images/batman.jpg'
import panther from './images/panther.jpg'
const Home = () => {
    const sliderImages = [
        {
           url: avenger,
        },
        {
           url: batman,
        },
        {
           url: panther,
        }
     ];
    return (
      <div>
         <SimpleImageSlider
            width='100%'
            height={500}
            images={sliderImages}
            showNavs={true}
            autoPlay={true}
         />
      </div>
   );
}
 
export default Home;