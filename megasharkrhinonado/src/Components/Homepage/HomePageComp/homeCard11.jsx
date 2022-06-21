
// change source to the image needed
import image01 from '../../../Media/HomePage/CinemaStretch';
import image02 from '../../../Media/HomePage/CinemaStretch';
import image03 from '../../../Media/HomePage/CinemaStretch';

const homeCard11 = () => {
    return ( 
        <>
        {/* alter the alt tag for what is needed */}
        <img src={image01} alt="PictureOfCinema" width="350px"/>
        <img src={image02} alt="PictureOfCinema" width="350px"/>
        <img src={image03} alt="PictureOfCinema" width="350px"/>
        
       </>
     );
}

export default homeCard11;