import axios from "axios";
import React, { useState, useRef } from "react";

const ForumComp02 = ({ titles }) => {

    const [titleSelected, setTitleSelected] = useState("");
    const [inputName, setInputName] = useState("");
    const [inputComment, setInputComment] = useState("");
    const [inputRating, setInputRating] = useState("");

    const newReview = () => {
        axios.put(`http://localhost:3000/movies/put/${titleSelected}`, {
            movieReviews: [{
                username: inputName,
                comment: inputComment,
                numberRating: inputRating
            }]
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
            <div className="board">
                <center>
                <h2><u>Discussion Board</u></h2>
                <div>
                    <label>Title: </label>
                    <select id="movieList" onChange={(event) => setTitleSelected(event.target.value)}>
                        {
                            titles.map((entry) => (
                                <option key={entry[0]} value={entry[0]}>{entry[1]}</option>
                            ))}
                    </select>
                </div>
                <div>
                    <label>Name: </label><input type="text" id="Name Of User" placeholder="Bimbo Bobbins" style={{ maxWidth: "250px", width: "100%" }} onChange={(event)=> setInputName(event.target.value)} />
                </div>
                <div>
                    <label>Rating: </label>
                    <select name="Rating" id="Rating" style={{ maxWidth: "40px", width: "100%" }} onChange={(event) => setInputRating(event.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <div>
                    <textarea rows="10" cols="50" type="text" id="creatureNotes" placeholder="This film was absolutly amazing" onChange={(event)=> setInputComment(event.target.value)} />
                </div>
                <button id="createObjBtn" onClick={newReview}>Submit</button>
                </center>
            </div>
        </>
    );
}

export default ForumComp02;