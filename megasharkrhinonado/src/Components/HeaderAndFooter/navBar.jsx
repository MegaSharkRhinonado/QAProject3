import { Link } from 'react-router-dom'
import React from 'react';
import logo from '../../Media/Nav/LOGO.png';
const NavBar = () => {
    return ( 
        <>
            <div className="headContainer">
                <h2>QA Cinemas</h2>
                <Link to="/"><img src={logo} alt="LOGO"></img></Link>
                <div className="navContainer">
                    <button type="button"><Link exact to="/">Home</Link></button>
                    <button type="button"><Link to="/ListingGallery">Listings</Link></button>
                    <button type="button"><Link to="/Bookings">Bookings</Link></button>
                    <button type="button"><Link to="/Classifications">Classifications</Link></button>
                    <button type="button"><Link to="/Screens">Screens</Link></button>
                    <button type="button"><Link to="/NewReleases">New Releases</Link></button>
                    <button type="button"><Link to="/Forums">Forum</Link></button>
                </div>
            </div >

        </>
     );
}
 
export default NavBar;