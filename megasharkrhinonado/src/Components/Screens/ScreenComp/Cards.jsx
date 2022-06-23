import CardsImage from "./CardImage";

const Cards = (data) => {
    return ( 
        <>
        <h4>{data.title}</h4>
        <CardsImage imageUrl={data.imageUrl} imageTitle={data.imageTitle}/>
        </>
     );
}
 
export default Cards;