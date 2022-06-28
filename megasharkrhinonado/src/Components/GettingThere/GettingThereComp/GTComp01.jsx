import React from "react";
//We tried using other methods such as google-maps-react and react-leaflet, but Jesse found <iframe> allowing us to embed the LOTR interactive map.

const GTComp01 = () => {
  return (
    <>
    
    <iframe title="Map" src="http://lotrproject.com/map/#zoom=3&lat=-1344&lon=1500&layers=BTTTTT" width="60%" height="400px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}

export default GTComp01;