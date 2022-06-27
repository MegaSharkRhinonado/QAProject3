

const FAQcard = (data) => {
    return (
        <>
        <center>
            <div style={{
                width: '99.65%',
                margin: '0px 0px 0px 0%',
                border: '5px solid #555',
            }}>
                <div>
                    <center><h2>{data.title}</h2></center>
                </div>
                <div>
                    <h3>{data.name}</h3>
                </div>
                <div>
                    <h3>{data.rating}</h3>
                </div>
                <div>
                    <h3>{data.desc}</h3>
                </div>
            </div>
            </center>

        </>
    );
}

export default FAQcard;