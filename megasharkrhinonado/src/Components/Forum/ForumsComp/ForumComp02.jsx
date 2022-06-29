import axios from "axios";

const ForumComp02 = () => {

    axios.post

    return (
        <>
            <div className="board">
                <h2>Discussion Board</h2>
                <div>
                    <label>Movie Title: </label> <input type="text" id="topic" placeholder="Lord Of The Rings: Two Towers" style={{ maxWidth: "250px", width: "100%" }}/>
                </div>
                <div>
                    <label>Name: </label><input type="text" id="Name Of User" placeholder="Bimbo Bobbins" style={{ maxWidth: "250px", width: "100%" }}/>
                </div>
                <div>
                    <label for="Rating">Rating: </label>
                        <select name="Rating" id="Rating" style={{ maxWidth: "40px", width: "100%" }}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                        </select>
                </div>

                <div>
                    <textarea rows="10" cols="50" type="text" class="CEN" id="creatureNotes" placeholder="This film was absolutly amazing"/>
                </div>
                <button id="createObjBtn">Submit</button>
            </div>
        </>
    );
}
export default ForumComp02;