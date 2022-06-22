import CardsImage from "./CardImage";

const Cards = (cData) => {
    console.log(cData.title)
    return ( 
        <>
        <h4>{cData.title}</h4>
        <CardsImage imageUrl={cData.imageUrl} imageTitle={cData.imageTitle}/>
        </>
     );
}
 
export default Cards;