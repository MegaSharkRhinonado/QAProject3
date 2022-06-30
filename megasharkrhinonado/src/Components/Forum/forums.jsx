import axios from "axios";
import React, { useState, useEffect } from "react";
import ForumCard01 from "./ForumsCard/ForumCard01";
import ForumCard02 from "./ForumsCard/ForumCard02";
import ForumComp02 from "./ForumsComp/ForumComp02";
import CommentCard from "./ForumsComp/CommentCard"

const Forums = () => {

    const [movies, setMovies] = useState([]);
    const [reviews, setReviews] = useState(movies);
    const [titles, setTitles] = useState([]);
    const testArray = ["1", "2", "3"];

    const getMovie = () => {
        axios.get("http://localhost:3000/movies/getAll")
            .then(response => {
                setMovies(response.data)
            }).catch((exception) => {
                console.log(exception);
            });
    }

    const getReview = () => {
        let selected = reviews
        for (let i = 1; i <= reviews; i++) {
            if (!reviews[i].numberRating) {
                selected.push(i);
            }
        }
        setReviews(selected);
    }

    const getTitle = () => {
        let selected = [];
        movies.map(data => (
            selected.push(data.movieTitle)
        ))
        console.log("Selected:" + selected)
        setTitles(selected)
    }

    useEffect(() => {
        getMovie();
        getReview();
        getTitle();
        console.log("titles:" + titles)
    }, []);

    return (
        <>
            <div className="content">
                <table>
                    <tbody>
                        <tr>
                            <ForumCard01 />
                        </tr>
                        <ForumComp02 data={testArray} />
                        <td>
                            {
                                reviews.map(movie => (
                                    <CommentCard data={movie} />
                                ))
                            }

                        </td>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Forums;