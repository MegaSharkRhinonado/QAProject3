const BC11 = ({data}) => {


    return ( 
        <>
            <h2>Movie Title: {data.movieTitle} </h2>
            <h2>Date: {data.movieShowings.date}</h2>
            <h2>Time: {data.movieShowings.time}</h2>
            <div>
                    <label>
                    <br />Name: </label>
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

            <h2>Seats: {data.seats}</h2>
            <h2>Price: {data.amount}</h2>
       </>
     );
}

export default BC11;