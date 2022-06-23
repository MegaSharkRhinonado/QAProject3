import image02 from '../../../Media/PlacesToGo/FrodosPilgrimage.png'

const PTGComp02 = () => {
    return (
        <>
            <div >
                <h2>Frodo's Pilgrimage</h2>
                <img src={image02} alt="Frodo's route to Mordor" width="370px" />
                <h4>With a local starting point but quite a trek, is Frodo's pilgrimage from the Shire to Morder to destory the ring, there are multiple choices though if you wish to deviate from his path.</h4>

                <h4>Frodo of course took the undesirable route however there are more peaceful paths to walk if you don't feel up to the challenge.</h4>
                <ul id="addressDiv" style={{listStyleType: "none"}}>
                <h3>Starting Address:</h3>
                <li>Bag End</li> 
                <li>The Shire</li> 
                <li>Middle Earth</li> 
                <li>BB14 FB0</li> 
                </ul>
                <ul id="addressDiv" style={{listStyleType: "none"}}>
                <h3>Finishing Address:</h3>
                <li>Mount Doom</li> 
                <li>Morder</li> 
                <li>Middle Earth</li> 
                <li>MD24 SA1</li> 
                </ul>

            </div>


        </>



    )
    }

    export default PTGComp02;