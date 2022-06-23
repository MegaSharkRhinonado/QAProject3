import CC01 from "../ClassificationComp/CC01";
import CC02 from "../ClassificationComp/CC02";
import CC03 from "../ClassificationComp/CC03";
import CC04 from "../ClassificationComp/CC04";
import CC05 from "../ClassificationComp/CC05";
import CC06 from "../ClassificationComp/CC06";
import '../class.css';

const CCard01 = () => {
    return ( 
        <>
            <div className="class">
                <table>
                    <tbody>
                        <CC01 />
                        <CC02 />
                        <CC03 />
                        <CC04 />
                        <CC05 />
                        <CC06 />
                    </tbody>
                </table>
            </div>
        </>
     );
}
 
export default CCard01;