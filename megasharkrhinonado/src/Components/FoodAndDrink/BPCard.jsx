import BPComp03 from "./BPComp03";
import BPComp01 from "./BPComp01";
import BPComp02 from "./BPComp02";
import BPComp04 from "./BPComp04";


const BPCard01 = () => {
    return (
        <>
            <div className="content">
                <h2 className="headerBP">Bilbo's Pantry</h2>
                <BPComp01 />
                    <table className="fdTable">
                        <tbody>
                            <BPComp03 />
                        </tbody>
                    </table>
               
               <BPComp04 />
            </div>

        </>
    )
}

export default BPCard01;