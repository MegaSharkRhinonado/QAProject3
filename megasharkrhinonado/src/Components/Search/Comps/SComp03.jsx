//SComp03 fetches record and transform reponse, returning an array of object per record


let SComp03 = ({data}) => {
    return (
        <>
        <div className="searchPageResults">
                <h1>{data.movieTitle}</h1>
                <h3>{data.description}</h3>
        </div>
        </>
    )
}

export default SComp03;
