
// change source to the image needed
import image01 from '../../../Media/Nav/LOGO.png';

const homeCard01 = () => {
    return ( 
        <>
          <div className="homepage">
            <img src={image01} alt="CinemaBanner" height="180vh"/>
            <p><strong>Cinemas</strong></p>
          </div>
       </>
     );
}

export default homeCard01;