import CommentCard from "../ForumsComp/CommentCard"
import ForumComp02 from "../ForumsComp/ForumComp02";
import { useState } from "react";

const ForumCard02 = ({ data }) => {

    const [review, setReview] = useState(data);

    return (
        <>
            <div>
                {
                        <CommentCard
                            title={review.movieTitle}
                        />
                }
            </div>
        </>
    );
}

export default ForumCard02;