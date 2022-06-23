import image03 from "../../../Media/PlacesToGo/CarasGaladhon.jpg"

const PTGComp03 = () => {
    return (
        <>
            <div >
                <h2>Lothloriens Forest</h2>
                <img src={image03} alt="Caras Galadhon" width="370px" />
                <p>Fancy stopping off at a magical forest? Galadriel has provided just that for you!</p>
                <p>Home to the Elves, the Golden Forest has failed to let anyone down! The Elves live in their treehouses and hey protect wildlife from harm, leaving them to live free among themselves. This mysterious and wonderous forest makes for a unforgettable experience</p>
                <ul  style={{listStyleType: "none"}}>
                <h3>Address:</h3>
                <li>Caras Galadhon</li> 
                <li>Lothlorien</li> 
                <li>Middle Earth</li> 
                <li>GA01 C02</li> 
                </ul>
            </div>


        </>



    )
    }

    export default PTGComp03;