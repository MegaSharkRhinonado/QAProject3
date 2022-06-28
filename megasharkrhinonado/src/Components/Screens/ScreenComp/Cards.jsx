import CardsImage from "./CardImage";

const Cards = (data) => {
    return ( 
        <>
            <CardsImage title={data.title} imageUrl={data.imageUrl} imageTitle={data.imageTitle} title2={data.title2} imageUrl2={data.imageUrl2} imageTitle2={data.imageTitle2}/>
        </>
     );
}
 
export default Cards;