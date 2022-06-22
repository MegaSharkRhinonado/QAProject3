
// Please change and set these to what they should show
movieTitle = "testtitle1";
date = "testDate";
time= "testTime";

// will need method to link to seating plan seats that have been selected
seats = ["testSeat1","testSeat2"];

// will need a method to work out price for this value
price = "testPrice";


const BC11 = () => {
    return ( 
        <>
            <h2>Movie Title: {movieTitle} </h2>
            <h2>Date: {date}</h2>
            <h2>Time: {time}</h2>
            <div style="text-align:center;">
                    <label style="color:rgb(255, 255, 255)" >
                    <br />Name</label>
                    <br /> <input type="text" id="name" />
            </div>
            <div style="text-align:center;">
                    <label style="color:rgb(255, 255, 255)" >
                    <br />Email</label>
                    <br /> <input type="text" id="email" />
            </div>
            <div style="text-align:center;">
                    <label style="color:rgb(255, 255, 255)" >
                    <br />Email</label>
                    <br /> <input type="number" id="children" />
            </div>

            <h2>Seats: {seats}</h2>
            <h2>Price: {price}</h2>
       </>
     );
}

export default BC11;