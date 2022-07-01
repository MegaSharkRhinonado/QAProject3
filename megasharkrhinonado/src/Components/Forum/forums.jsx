import axios from "axios";
import React, { useState, useEffect } from "react";
import ForumCard01 from "./ForumsCard/ForumCard01";
import ForumComp02 from "./ForumsComp/ForumComp02";
import CommentCard from "./ForumsComp/CommentCard"

const Forums = () => {

    const [movies, setMovies] = useState([]);
    const [reviews, setReviews] = useState([]);
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

    const getReview = (movies) => {
        let selected = [] 
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].movieReviews.length > 0) {
                selected.push(movies[i]);
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
                <ForumCard01 />
                <ForumComp02 titles={titles} />
                {
                    reviews.map(movie => (
                        <CommentCard data={movie} />
                    ))
                }
            </div>
        </>
    );
}

export default Forums;