import image01 from '../../../Media/HomePage/CinemaStretch.jpg';
import Twitter from '../../../Media/Foot/logos/Twitter.png';
import Facebook from '../../../Media/Foot/logos/Facebook.png';
import Reddit from '../../../Media/Foot/logos/Reddit.png';

const AC02 = () => {
    return ( 
      <>
        <div className="aboutContent">
          {/* change the alt text for what is needed */}
          <table>
            <img src={image01} alt="PictureOfCinema" width="350px"/>
            <td>
                <tr><a href='https://twitter.com/LOTR_Quotes'><img className="left" src={Twitter} alt="Twitter" width="40"></img></a></tr>
                <tr><a href='https://facebook.com/Lord-of-the-Rings-113432253662188'><img className="left" src={Facebook} alt="Facebook" width="40"></img></a></tr>
                <tr><a href='https://www.reddit.com/r/lotr/'><img className="left" src={Reddit} alt="Reddit" width="40"></img></a></tr>
            </td>
          </table>
          <h2>Matthew Duck</h2>
          
          {/* change what is in the text for what is needed */}
          <h4>Extra Information about Matthew:</h4>
          <p>Duckee was solely in charge of the backend, creating the schemas and routers for booking and movies so that we could use the front end to interact with a database, after finishing the backend he moved onto Listings and New Releases as they were the most heavy linked with backend.
          </p>

        </div>
       </>
     );
}

export default AC02;