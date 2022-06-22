import BCard01 from "./BookingsCards/BCard01";
import BCard02 from "./BookingsCards/BCard02"

const Booking = (data) => {
    return ( 
        <>
            <BCard01 data={data}/>
            <BCard02 />
        </>
     );
}
 
export default Booking;