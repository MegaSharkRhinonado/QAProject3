import CardsImage from "./CardImage";

const Cards = (data) => {
    console.log(data.title)
    return ( 
        <>
        <h4>{data.title}</h4>
        <CardsImage imageUrl={data.imageUrl} imageTitle={data.imageTitle}/>
        </>
     );
}
 
export default Cards;