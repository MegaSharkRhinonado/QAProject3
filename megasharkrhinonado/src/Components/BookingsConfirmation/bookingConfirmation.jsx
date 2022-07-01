import BCConcard01 from "./BookingsConCards/BCConcard01";

import React from 'react';

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const BookingConfirmation = () => {

    const { data }  = useParams();

    const [movie, setMovie] = useState([]);

    
    
    const getMovie = () => {
        axios.get(`http://localhost:3000/bookings/get/` + data)
                .then(response => {
                    console.log(response.data);
                     setMovie(response.data);
                }).catch((exception) => {
                    console.log(exception);
                });
    };

    useEffect(() => {
        getMovie();

    }, []);

    return ( 
        <>
        
            <BCConcard01 data={movie} />
        </>
     );
}
 
export default BookingConfirmation;
