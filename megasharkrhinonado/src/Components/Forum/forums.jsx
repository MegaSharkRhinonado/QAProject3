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

    const getMovie = () => {
        axios.get("http://localhost:3000/movies/getAll")
            .then(response => {
                setMovies(response.data)
                getReview(response.data);
                getTitle(response.data);
            }).catch((exception) => {
                console.log(exception);
            });
    }

    const getReview = (reviews) => {
        let selected = reviews
        for (let i = 1; i <= reviews; i++) {
            if (!reviews[i].numberRating) {
                selected.push(i);
            }
        }
        setReviews(selected);
    }

    const getTitle = (movies) => {
        let result = []
        for (let i = 0; i < movies.length; i++) {
            result.push([movies[i]._id, movies[i].movieTitle])
        }
        setTitles(result);
    }

    useEffect(() => {
        getMovie();

    }, []);


    return (
        <>
            <div className="content">
                <table>
                    <tbody>
                        <tr>
                            <ForumCard01 />
                        </tr>
                        <ForumComp02 titles={titles} />
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