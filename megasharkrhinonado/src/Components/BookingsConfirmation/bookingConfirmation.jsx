import BCConcard01 from "./BookingsConCards/BCConcard01";



import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const BookingConfirmation = () => {

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


    console.log("Booking Con test 1" + {data})
    
    console.log("Booking Con test 2" +  {movie})

    return ( 
        <>
        
            <BCConcard01 data={movie} />
        </>
     );
}
 
export default BookingConfirmation;
