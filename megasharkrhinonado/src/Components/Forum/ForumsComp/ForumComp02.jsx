const ForumComp02 = () => {
    return (
        <>
            <center>
                <div style={{
                    margin: '0px 0px 2% 0%'
                }}>
                    <h2>Discussion Board</h2>
                    <div>
                        <label>
                            <br />Movie Title</label>
                        <br /> <input type="text" id="topic" />
                    </div>
                    <div>
                        <label>
                            <br />Name</label>
                        <br /> <input type="text" id="Name Of User" />
                    </div>
                    <div>
                        <label>
                            <br />Rating</label>
                        <br /> <input type="text" id="topic" />
                    </div>

                    <div>
                        <label>Description</label>
                        <br />
                        <textarea type="text" class="CEN" id="creatureNotes" />
                    </div>

                    <center><button id="createObjBtn">Submit</button></center>
                </div>
            </center>
        </>
    );
}
export default ForumComp02;