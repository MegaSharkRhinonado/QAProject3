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
          <h2>Scrum Lord Glory Be to Dictator James</h2>
          
          {/* change what is in the text for what is needed */}
          <p> Description ect : Nothing is possible unless one will commands, a will which has to be obeyed by others,
              beginning at the top and ending only at the very bottom. This is the expression of an
              authoritarian state – not of a weak, babbling democracy – of an authoritarian state where
              everyone is proud to obey, because he knows: I will likewise be obeyed when I must take
              command</p>

        </div>
      </>
     );
}

export default AC01;