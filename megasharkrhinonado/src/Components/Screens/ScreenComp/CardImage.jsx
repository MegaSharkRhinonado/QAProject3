const CardsImage = ({title, imageUrl, imageTitle, title2, imageUrl2, imageTitle2}) => {
    return ( 
        <>
            <table>
                <tr>
                    <h2>{title}</h2>
                    <img src={imageUrl} alt={imageTitle} width="80%" height="80%"/>
                    <td>
                        <h2>{title2}</h2>
                        <img src={imageUrl2} alt={imageTitle2} width="90%" height="90%"/>
                    </td>
                </tr>
                
            </table>
        </>
     );
}
 
export default CardsImage;