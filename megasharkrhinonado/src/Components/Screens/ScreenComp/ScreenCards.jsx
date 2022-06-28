import Cards from "./Cards";
import Standard_Decor from "../../../Media/Screens/Standard-Decor.jpg"
import Standard from "../../../Media/Screens/Standard.png"
import Directors_Decor from "../../../Media/Screens/Directors-Decor.jpg"
import Directors from "../../../Media/Screens/Directors.png"

const ScreenCards = () => {
    const cardData = [
        {
            title:"Standard Screen",
            imageUrl:Standard_Decor,
            imageTitle:"Standard Decor",
            title2:"Screen Seating Plan",
            imageUrl2:Standard,
            imageTitle2:"Standard Seats"
        },
        {
            title:"Directors Box",
            imageUrl:Directors_Decor,
            imageTitle:"Directors Box",
            title2:"Directors Seating Plan",
            imageUrl2:Directors,
            imageTitle2:"Box Seats"
        }
    ];
    return ( 
        <>
        {
            cardData.map(data => {
                return <div className="screenCards"><Cards title={data.title} imageUrl={data.imageUrl} imageTitle={data.imageTitle} title2={data.title2} imageUrl2={data.imageUrl2} imageTitle2={data.imageTitle2}/></div>
            })
        }
        </>
     );
}
 
export default ScreenCards;