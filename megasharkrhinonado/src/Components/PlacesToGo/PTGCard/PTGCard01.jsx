import PTGComp01 from "../PTGComp/PTGComp01";
import PTGComp02 from "../PTGComp/PTGComp02";
import PTGComp03 from "../PTGComp/PTGComp03";

const PTGCard01 = () => {
    return (
        <>
        <div>
            <div className="PTGDivs">
                <PTGComp01 />
            </div>
            <div className="PTGDivs">
                <PTGComp02 />
            </div>
            <div className="PTGDivs">
                <PTGComp03 />
            </div>
        </div>
        </>
    )
}

export default PTGCard01;