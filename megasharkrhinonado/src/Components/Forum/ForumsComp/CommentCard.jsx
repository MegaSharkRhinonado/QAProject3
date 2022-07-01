import Review from "./Review";

const CommentCard = ({ data }) => {

    return (
        <>
            <center>
                <div style={{
                    width: '99.65%',
                    margin: '0px 0px 0px 0%',
                    border: '5px solid #555',
                }}>
                    <div>
                        <center><h2>{data.movieTitle}</h2></center>
                    </div>
                    {
                        data.movieReviews.map((review) => (
                            <Review key={data._id} review={review} />
                        ))}
                </div>
            </center>

        </>
    );
}

export default CommentCard;