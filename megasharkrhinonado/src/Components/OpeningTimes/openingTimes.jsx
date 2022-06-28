import OTCard01 from "./OpeningTimeCard/OTCard01";
import OTCard02 from "./OpeningTimeCard/OTCard02";

const OpeningTimes = () => {
    return (
        <>
            <div className="content">
                <div id="ot">
                    <OTCard01 />
                    <OTCard02 />
                </div>
            </div>
        </>
    );
}

export default OpeningTimes;