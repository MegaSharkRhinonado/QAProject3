import BPComp03 from "./BPComp03";
import BPComp01 from "./BPComp01";
import BPComp02 from "./BPComp02";
import BPComp04 from "./BPComp04";


const BPCard01 = () => {
    return (
        <>
            <div className="content">
                <div className="menu">
                    <h1 className="headerBP"><u>Bilbo's Pantry</u></h1>
                    <BPComp01 />
                        <table className="fdTable">
                            <tbody className="miniDiv">
                                <BPComp03 />
                            </tbody>
                        </table>
                
                <BPComp04 />
               </div>
            </div>

        </>
    )
}

export default BPCard01;