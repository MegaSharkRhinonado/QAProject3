import { Link } from 'react-router-dom';
import Booking from "../../Bookings/booking"

const LGC01 = ({ data }) => {

    return (
        <>
            <div>
                <img src={data.movieImage} alt="PictureOfCinema" width="350px" />
                <h1>{data.movieTitle}</h1>
                <h3>{data.description}</h3>
            </div>

            <h2>showing times</h2>
            {/* <h3>{data.movieShowings}</h3> */}
            <h2>directors and actors test 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus esse voluptatibus maxime neque, molestiae, nulla voluptatum soluta perferendis quasi magni voluptas aliquid velit distinctio, at quos voluptates ea minus temporibus.</h2>
            <Link to={`/Booking/${data._id}`}><button>Book Tickets!</button></Link>
        </>
    );
}

export default LGC01;