import image01 from "../../../Media/PlacesToGo/helmsdeep.jpg" 

const PTGComp01 = () => {
    return (
        <>
            <div >
                <h2>Helm's Deep</h2>
                <img src={image01} alt="Helm's Deep" />
                <h4>The center of Rohan brings a luxurious and booming nightclub that offers food, drink and recretional options to explore and enjoy. 
                </h4>
                
                <h4>As you can see they are always busy and sometimes have a queue but with great service and a high turnover you'll be in and out in no time!</h4>
                
                <ul id="addressDiv" style={{listStyleType: "none" }}>
                <h3>Address:</h3>
                <li>Helm's Deep</li> 
                <li>Rohan</li> 
                <li>Middle Earth</li> 
                <li>RH09 TE19</li> 
                </ul>
            </div>


        </>



    )
    }

    export default PTGComp01;
