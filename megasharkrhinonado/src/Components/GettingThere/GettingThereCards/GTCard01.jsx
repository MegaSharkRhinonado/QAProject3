import GTComp01 from "../GettingThereComp/GTComp01.jsx";

import React from 'react';
import GTComp02 from "../GettingThereComp/GTComp02.jsx";
import GTComp03 from "../GettingThereComp/GTComp03.jsx";
import GTComp04 from "../GettingThereComp/GTComp04.jsx";

const GTCard01 = () => {
        return (
        <>
            <div className="map-header">
            <GTComp02 />
            </div>
            <div className="map">
            <GTComp01 />
            </div>
            <div className="map-info">
            <GTComp03 />
            </div>
            <div style={{textAlign:"center"}}>
            <GTComp04 />
            </div>
        </>
    );
     

        }

export default GTCard01;
