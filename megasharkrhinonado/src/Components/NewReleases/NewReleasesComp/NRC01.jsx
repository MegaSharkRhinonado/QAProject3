import NRC02 from "./NRC02";


const NRC01 = ({ data }) => {
    return (
        <>
            <div className="PTGDivs">
                <div>
                    <img src={data.movieImage} alt="PictureOfCinema" width="350px" />
                    <h1>{data.movieTitle}</h1>
                    <h3>{data.description}</h3>
                    <h2>Featuring: {data.actors}</h2>
                    <h2>Directed by: {data.directors}</h2>
                    <h2>Runtime: {data.runtime}</h2>
                    <h2>Release Date: {data.releaseDate}</h2>
                </div>

                <h2>Showing times</h2>
                {
                    data.movieShowings.map(data =>
                        <NRC02 data={data} key={data._id} />
                    )
                }

            </div>
        </>
    );
}

export default NRC01;