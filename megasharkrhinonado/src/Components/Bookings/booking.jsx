import BCard01 from "./BookingsCards/BCard01";
import BCard02 from "./BookingsCards/BCard02";
import BC11 from "./BookingsComp/BC11";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Booking = () => {

    const { data } = useParams();
    const [movie, setMovie] = useState([]);

    const getMovie = () => {
        axios.get(`http://localhost:3000/movies/get/` + data)
                .then(response => {
                     setMovie(response.data)
                }).catch((exception) => {
                    console.log(exception);
                });
    }

    useEffect(() => {
        getMovie();
    }, []);


    return (
        <>
            <BC11 data={movie} />
            <BCard02 />
        </>
    );
}

export default Booking;