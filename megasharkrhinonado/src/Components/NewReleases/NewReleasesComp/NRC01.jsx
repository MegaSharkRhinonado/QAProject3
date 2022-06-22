// change source to the image needed

import image01 from '../../../Media/HomePage/CinemaStretch.jpg';

// remember to change these to the data retreived by the database
let title = "testTitle1";
let description = "testDescription1";
let time = ["time1","time2","time3"];

const NRC01 = () => {
    return ( 
        <>

        <div>
            {/* alter the alt tag for what is needed */}
            <img src={image01} alt="PictureOfCinema" width="350px"/>
            <h1>{title}</h1>
            <h3>{description}</h3>
        </div>

        <h2>showing times</h2>
        <h3>{time}</h3>
        <h2>directors and actors test 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus esse voluptatibus maxime neque, molestiae, nulla voluptatum soluta perferendis quasi magni voluptas aliquid velit distinctio, at quos voluptates ea minus temporibus.</h2>

        
       </>
     );
}

export default NRC01;