import CommentCard from "../ForumsComp/CommentCard"
import ForumComp02 from "../ForumsComp/ForumComp02";

const ForumCard02 = () => {

    // pass data from the data base into this card data
    const forumCardData = [

        {
            title: "title Example 1",
            name: "Name 1",
            rating: "Rating 1/5",
            desc: " Description 1"

        },
        {
            title: "title Example 2",
            name: "Name 2",
            rating: "Rating 2/5",
            desc: "description 2"
        }
    ];
    return (
        <>
        <ForumComp02 />
            {
                forumCardData.map(data => {
                    return <div className="screenCards"><CommentCard
                        title={data.title}
                        name={data.name}
                        rating={data.rating}
                        desc={data.desc} /></div>
                })
            }
        </>
    );
}

export default ForumCard02;