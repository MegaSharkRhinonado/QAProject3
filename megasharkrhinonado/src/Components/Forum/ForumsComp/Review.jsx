const Review = (data) => {
    
    return (
        <>
            <div className="miniDiv">
                <center>
                    <div style={{
                        width: '99.65%',
                        margin: '0px 0px 0px 0%',
                        border: '5px solid #555',
                    }}>
                        <div>
                            <h3>{data.review.username}</h3>
                        </div>
                        <div>
                            <h3>{data.review.numberRating}</h3>
                        </div>
                        <div>
                            <h3>{data.review.comment}</h3>
                        </div>
                    </div>
                </center>
            </div>

        </>
    );
}

export default Review;