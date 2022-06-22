
// Please change and set these to what they should show
let movieTitle = "testtitle1";
let date = "testDate";
let time= "testTime";

// will need method to link to seating plan seats that have been selected
let seats = ["testSeat1","testSeat2"];

// will need a method to work out price for this value
let price = "testPrice";


const BC11 = () => {
    return ( 
        <>
            <h2>Movie Title: {movieTitle} </h2>
            <h2>Date: {date}</h2>
            <h2>Time: {time}</h2>
            <div>
                    <label>
                    <br />Name</label>
                    <br /> <input type="text" id="name" />
            </div>
            <div>
                    <label>
                    <br />Email</label>
                    <br /> <input type="text" id="email" />
            </div>
            <div >
                    <label>
                    <br />Email</label>
                    <br /> <input type="number" id="children" />
            </div>

            <h2>Seats: {seats}</h2>
            <h2>Price: {price}</h2>
       </>
     );
}

export default BC11;