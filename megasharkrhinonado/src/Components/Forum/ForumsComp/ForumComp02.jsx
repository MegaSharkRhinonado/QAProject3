import axios from "axios";
import React, { useEffect, useState, useRef } from "react";

const ForumComp02 = (titles) => {

    const [movieTitle, setTitle] = useState(titles);
    const [titleSelected, setTitleSelected] = useState("");

    const inputName = useRef();
    const inputComment = useRef();
    const inputRating = useRef();

    console.log(movieTitle)

    const handleMovieChange = (event) => {
        setTitleSelected(previosState => {
            return previosState = event.target.value;
        })
    }

    const newReview = () => {
        axios.post('http://localhost:3000/bookings/put/' + titleSelected, {
            username: inputName,
            comment: inputComment,
            numberRating: inputRating
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <>
            <div name="board">
                <h2>Discussion Board</h2>
                <div>
                    <label>Title: </label><select id="movieList" onChange={handleMovieChange}>
                        {
                            movieTitle.data?.map((entry, i) => (
                                <option key={i} value={entry}>{entry}</option>
                            ))}
                    </select>
                </div>
                <div>
                    <label>Name: </label><input type="text" id="Name Of User" placeholder="Bimbo Bobbins" style={{ maxWidth: "250px", width: "100%" }} ref={inputName} />
                </div>
                <div>
                    <label>Rating: </label>
                    <select name="Rating" id="Rating" style={{ maxWidth: "40px", width: "100%" }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <div>
                    <textarea rows="10" cols="50" type="text" id="creatureNotes" placeholder="This film was absolutly amazing" ref={inputComment} />
                </div>
                <button id="createObjBtn" onClick={newReview}>Submit</button>
            </div>
        </>
    );
}
export default ForumComp02;