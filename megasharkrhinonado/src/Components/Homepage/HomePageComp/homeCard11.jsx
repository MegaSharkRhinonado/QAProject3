
// change source to the image needed
import image01 from '../../../Media/HomePage/FellowShip.jpg';
import image02 from '../../../Media/HomePage/TwoTowers.jpg';
import image03 from '../../../Media/HomePage/ReturnKing.jpg';

const homeCard11 = () => {
    return ( 
        <>
        {/* alter the alt tag for what is needed */}
        <img src={image01} alt="PictureOfCinema" width="20%"/>
        <img src={image02} alt="PictureOfCinema" width="20%"/>
        <img src={image03} alt="PictureOfCinema" width="20%"/>
        
       </>
     );
}

export default homeCard11;