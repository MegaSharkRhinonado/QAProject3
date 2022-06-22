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
                <Link to="/"><img className="left" src={logo} alt="LOGO" width="100"></img></Link>
                <table >
                    <tbody>
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
                            <li><Link to="/">Getting Here?</Link></li>
                            <li><Link to="/PlacesToGo">Whats Local</Link></li>
                            <li></li>
                        </td>
                        <td>
                            <li><Link to="/"><img className="left" src={Twitter} alt="Twitter" width="20"></img>Twitter</Link></li>
                            <li><Link to="/"><img className="left" src={Facebook} alt="Facebook" width="20"></img>Facebook</Link></li>
                            <li><Link to="/"><img className="left" src={Reddit} alt="Reddit" width="20"></img>Reddit</Link></li>
                        </td>
                    </tbody>
                </table>
            </div >
        </>
     );
}
 
export default Footer;
