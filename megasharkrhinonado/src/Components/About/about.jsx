import ACard01 from "./AboutCards/ACard01";
import { Link } from 'react-router-dom'

const About = () => {
    return ( 
        <>
            <div className="content">
                <ACard01 />
                <div id="contact"><Link to="/ContactUs"><strong>Contact Us</strong></Link></div>
            </div> 
        </>
     );
}
 
export default About;