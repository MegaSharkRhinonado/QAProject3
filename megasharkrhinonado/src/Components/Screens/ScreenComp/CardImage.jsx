const CardsImage = ({imageUrl, imageTitle}) => {
    return ( 
        <>
            <img src={imageUrl} alt={imageTitle} width="350px"/>
        </>
     );
}
 
export default CardsImage;