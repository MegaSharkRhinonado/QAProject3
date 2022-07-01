import BCard01 from "./BookingsCards/BCard01";

// import BC11 from "./BookingsComp/BC11";
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
            <div className="content">
                <div className="PTGDivs">
                    <BCard01 data={movie} />
                    
                </div>
            </div>
        </>
    );
}

export default Booking;