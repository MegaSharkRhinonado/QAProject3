import { Link } from 'react-router-dom'
import React from 'react';
import logo from '../../Media/Nav/LOGO.png';
import Twitter from '../../Media/Foot/logos/Twitter.png';
import Facebook from '../../Media/Foot/logos/Facebook.png';
import Reddit from '../../Media/Foot/logos/Reddit.png';

const Footer = () => {
    return ( 
        <>
        {/* about, contact, socials, opening times, geting there, placestogo, class, terms and condish */}
            <div className="footContainer"> 
               
                <table >
                    <tbody>
                        <td>
                             <Link to="/"><img className="left" src={logo} alt="LOGO" width="100" filter="contrast(100%) "></img></Link>
                        </td>
                        <td>
                            <li><Link to="/About">About Us</Link></li>
                            <li><Link to="/ContactUs">Contact Us</Link></li>
                            <li><Link to="/OpeningTimes">Opening Times</Link></li>
                        </td>
                        <td>
                            <li><Link to="/Classifications">Classifications</Link></li>
                            <li><Link to="/">Terms And Conditions</Link></li>
                            <li></li>
                        </td>
                        <td>
                            <li><Link to="/GettingThere">Getting Here?</Link></li>
                            <li><Link to="/PlacesToGo">Whats Local</Link></li>
                            <li></li>
                        </td>
                        <td>
                            <li><a href='https://twitter.com/LOTR_Quotes'>  <img className="left" src={Twitter} alt="Twitter" width="20"></img>Twitter</a></li>
                            <li><a href='https://facebook.com/Lord-of-the-Rings-113432253662188'><img className="left" src={Facebook} alt="Facebook" width="20"></img>Facebook</a></li>
                            <li><a href='https://www.reddit.com/r/lotr/'><img className="left" src={Reddit} alt="Reddit" width="20"></img>Reddit</a></li>
                        </td>
                    </tbody>
                </table>
            </div >
        </>
     );
}
 
export default Footer;
