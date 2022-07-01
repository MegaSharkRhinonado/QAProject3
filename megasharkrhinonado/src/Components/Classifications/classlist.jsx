import NewCard from "./ClassificationCards/NewCar";
import BBFC_U from "../../Media/Classifications/BBFC_U.png"
import BBFC_PG from "../../Media/Classifications/BBFC_PG.png"
import BBFC_12 from "../../Media/Classifications/BBFC_12.png"
import BBFC_12A from "../../Media/Classifications/BBFC_12A.png"
import BBFC_15 from "../../Media/Classifications/BBFC_15.png"
import BBFC_18 from "../../Media/Classifications/BBFC_18.png"

const ClassList = () => {
    const listData = [
        {
            image:BBFC_U,
            imageAlt:"Universal Rating Logo",
            imageWidth:"100%",
            title:"U Universal - Suitable for all",
            url:"https://www.bbfc.co.uk/rating/U",
            urlAlt:"More Information about BBFC Universal Rating"
        },
        {
            image:BBFC_PG,
            imageAlt:"Parental Guidance Rating Logo",
            imageWidth:"100%",
            title:"PG - Parental Guidance",
            url:"https://www.bbfc.co.uk/rating/pg",
            urlAlt:"More Information about BBFC Parental Guidance Rating"
        },
        {
            image:BBFC_12,
            imageAlt:"12 Rating Logo",
            imageWidth:"100%",
            title:"12 – Suitable for 12 years and over",
            url:"https://www.bbfc.co.uk/rating/12",
            urlAlt:"More Information about BBFC 12 Rating"
        },
        {
            image:BBFC_12A,
            imageAlt:"12A Rating Logo",
            imageWidth:"100%",
            title:"12 – Suitable for 12 years and over, Unless accompanies by an Adult",
            url:"https://www.bbfc.co.uk/rating/12",
            urlAlt:"More Information about BBFC 12A Rating"
        },
        {
            image:BBFC_15,
            imageAlt:"15 Rating Logo",
            imageWidth:"100%",
            title:"15 – Suitable only for 15 years and over",
            url:"https://www.bbfc.co.uk/rating/15",
            urlAlt:"More Information about BBFC 15 Rating"
        },
        {
            image:BBFC_18,
            imageAlt:"18 Rating Logo",
            imageWidth:"100%",
            title:"18 – Suitable only for adults",
            url:"https://www.bbfc.co.uk/rating/18",
            urlAlt:"More Information about BBFC 18 Rating"
        }
    ]
    return ( 
        <>
        {
            listData.map(data => {
                return <div className="classcards"><NewCard image={data.image} imageAlt={data.imageAlt} imageWidth={data.imageWidth} title={data.title} url={data.url} urlAlt={data.urlAlt}/></div>
            })
        }
        </>
     );
}
 
export default ClassList;