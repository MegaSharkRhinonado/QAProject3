const CommentCard = (data) => {
    return (
        <>
        <center>
            <div style={{
                width: '99.65%',
                margin: '0px 0px 0px 0%',
                border: '5px solid #555',
            }}>
                <div>
                    <center><h2>{data.data.movieTitle}</h2></center>
                </div>
                <div>
                    <h3>{data.username}</h3>
                </div>
                <div>
                    <h3>{data.numberRating}</h3>
                </div>
                <div>
                    <h3>{data.comment}</h3>
                </div>
            </div>
            </center>

        </>
    );
}

export default CommentCard;