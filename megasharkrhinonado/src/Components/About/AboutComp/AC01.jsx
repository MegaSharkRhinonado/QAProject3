import image01 from '../../../Media/HomePage/CinemaStretch.jpg';
import Twitter from '../../../Media/Foot/logos/Twitter.png';
import Facebook from '../../../Media/Foot/logos/Facebook.png';
import Reddit from '../../../Media/Foot/logos/Reddit.png';

const AC01 = () => {
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
          <h2>Scrum Master - James Long</h2>
          
          {/* change what is in the text for what is needed */}
          <h4>Extra information about James: </h4>
          <p>James was responsible for handling our Jira and Git merge requests, keeping us on track with tasks and supporting each member while picking up parts of the project to work on himself such as the Forum, ContactUs and Bookings.</p>
        </div>
      </>
     );
}

export default AC01;