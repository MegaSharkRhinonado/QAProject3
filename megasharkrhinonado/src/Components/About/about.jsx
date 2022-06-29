import ACard01 from "./AboutCards/ACard01";
import { Link } from 'react-router-dom'
import Scrum from "./Scrum/scrum";

const About = () => {
    return ( 
        <>
            <div className="content">
                <ACard01 />
                <div id="contact"><Link to="/ContactUs"><strong>Contact Us</strong></Link></div>
                <Scrum />
            </div> 
        </>
     );
}
 
export default About;