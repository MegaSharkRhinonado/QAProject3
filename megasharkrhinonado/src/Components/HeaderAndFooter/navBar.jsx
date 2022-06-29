import { Link } from 'react-router-dom'
import React from 'react';
import logo from '../../Media/Nav/LOGO.png';
import SComp01 from '../Search/Comps/SComp01';
const NavBar = () => {
    return ( 
        <>
            <div className="headContainer"> 
                <Link to="/"><img className="left" src={logo} alt="LOGO" width="200"></img></Link>
                <h2 style={{fontStyle:"Watcher"}}>QA Cinemas</h2>
                <div className="navContainer">
                    <Link to="/HomePage"><input type="button" value="Home" /></Link>
                    <Link to="/ListingGallery"><input type="button" value = "Listings"></input></Link>
                    <Link to="/NewReleases"><input type="button" value = "New Releases"></input></Link>
                    <Link to="/Screens"><input type="button" value = "Screens"></input></Link>
                    <Link to="/FoodAndDrink"><input type="button" value = "Bilbo's Pantry"></input></Link>
                    <Link to="/Forums"><input type="button" value = "Forum"></input></Link>
                    <SComp01 />
                </div>
            </div >
        </>
     );
}
 
export default NavBar;