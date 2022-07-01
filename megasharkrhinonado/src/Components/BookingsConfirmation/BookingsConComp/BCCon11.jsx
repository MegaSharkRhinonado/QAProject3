
import emailjs from "emailjs-com";
import React from 'react';
import BCCON12 from './BCCON12'

// Please change and set these to what they should show
let movieTitle = "testtitle1";
let date = "testDate";
let time = "testTime";

// will need method to link to seating plan seats that have been selected
let seats = ["testSeat1", "testSeat2"];

// will need a method to work out price for this value
let price = "testPrice";


const BCCon11 = ({ data }) => {

    console.log("test1 BCCon11 " + data);

    console.log("MovieTitle " + data.movieTitle);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_l2nzbsn', e.current, 'HSU53k5NtBnpmCHyg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    console.log(" Seat ID " + data.seatID);

    return (
        <>

            <form onSubmit={sendEmail}>



            </form>


            <h2>Booking Confirmed!</h2>
            <h2>Movie Title: {data.movieTitle} </h2>
            <h2>Date: {data.date}</h2>
            <h2>Time: {data.time}</h2>
            <h2>Email: {data.email}</h2>
            <h2>Children: {data.children}</h2>

            <h2>Seats: {
                data.seatID?.map(seat => (
                    <BCCON12 data={seat} />
                ))
            }</h2>
            <h2>Price: {price}</h2>
        </>
    );
}

export default BCCon11;