import scrumLogo from "../../../Media/Scrum/scrumLogo.png"
const Scrum = () => {
    return ( 
        <>
            <div className="aboutContent" style={{backgroundColor:"white"}}>
                <a href="https://www.scrum.org/"><img src={scrumLogo} alt="LOGO" width="200"></img></a>
                <h3>What is Scrum?</h3>
                <p>It is a framework within which people can address complex adaptive problem while productivity and creativity of delivering product is at highest possible values.</p>
                <h3>How did we use scrum: </h3>
                <p>We used scrum by organising our project into user stories and then into two sprints, meaning breaking the project into every section and then planning to complete tasks in a time limit. Peer programming also was huge within our group, as soon as someone had an issue or needed help, a team member would always jump to help.</p>
            </div>
        </>
     );
}
 
export default Scrum;