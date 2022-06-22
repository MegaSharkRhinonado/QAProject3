import Cards from "./Cards";

const ScreenCards = () => {
    const cardData = [
        {
            title:"Standard Screen",
            imageUrl:"https://th.bing.com/th/id/OIP.z8z4FwIq24fadxwidp1A9AHaEK?pid=ImgDet&rs=1",
            imageTitle:"Standard Decor"
        },
        {
            title:"Screen Seating Plan",
            imageUrl:"https://ichef.bbci.co.uk/news/976/cpsprodpb/7614/production/_105482203__105172250_gettyimages-857294664.jpg",
            imageTitle:"Standard Seats"
        },
        {
            title:"Directors Box",
            imageUrl:"https://ichef.bbci.co.uk/news/976/cpsprodpb/7614/production/_105482203__105172250_gettyimages-857294664.jpg",
            imageTitle:"Directors Box"
        },
        {
            title:"Directors Seating Plan",
            imageUrl:"https://ichef.bbci.co.uk/news/976/cpsprodpb/7614/production/_105482203__105172250_gettyimages-857294664.jpg",
            imageTitle:"Box Seats"
        }
    ];
    return ( 
        <>
        {
            cardData.map((cData) => {
                return <div className="screenCards"><Cards data={cData}/></div>
            })
        }
        </>
     );
}
 
export default ScreenCards;