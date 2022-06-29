
const FAQcard = (data) => {
    return ( 
        <>
        <div id="questions">
            <div style={{
                        float: 'left',
                        margin: '0px 0px 0px 8%',
                        // border: '5px solid #555',
                        height: '40%',
                        width: '40%'
                    }}>
                <center>
                    <h2>{data.question}</h2>
                </center>
            </div>
            <div style={{
                        float: 'left',
                        margin: '0px 0px 0px 8%',
                        // border: '5px solid #555',
                        height: '40%',
                        width: '40%'
                    }}>
                <h3>{data.answer}</h3>
            </div>
        </div>

        </>
     );
}
 
export default FAQcard;