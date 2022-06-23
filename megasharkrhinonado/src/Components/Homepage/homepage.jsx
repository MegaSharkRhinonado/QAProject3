import HPMainCard01 from "./HomePageMainCards/HPMainCard01";
import HPMainCard02 from "./HomePageMainCards/HPMainCard02";
// import HPMainCard03 from "./HomePageMainCards/HPMainCard03";
const HomePage = () => {
    return ( 
        <>
            <div className="content">
                    <table>
                        <tr style={{
                        float: 'left',
                        margin: '0px 0px 0px 0%',
                        paddingBottom: '1.75%'
                        }}>

                            <HPMainCard01 />
                        </tr>


                        <tr>
                            <center>
                                <HPMainCard02 />
                            </center>
                        </tr>
                   
                <br />
                {/* <HPMainCard03 /> */}
                </table>
            </div>
        </>
     );
}
 
export default HomePage;