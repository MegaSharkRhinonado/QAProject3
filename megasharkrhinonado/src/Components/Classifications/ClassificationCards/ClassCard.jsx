import '../class.css';

const ClassCard = ({image, imageAlt, imageWidth, title, url, urlAlt}) => {
    return ( 
        <>
            <div className="class" id="left">
                <table>
                    <tbody>
                        <tr>
                            <td><img src={image} alt={imageAlt} width={imageWidth}/></td>
                            <td><h3>{title}</h3> 
                            <a href={url}>{urlAlt}</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
     );
}
 
export default ClassCard;