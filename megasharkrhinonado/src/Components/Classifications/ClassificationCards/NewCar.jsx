import ClassCard from "./ClassCard";

const NewCard = (data) => {
    return ( 
        <>
            <ClassCard image={data.image} imageAlt={data.imageAlt} imageWidth={data.imageWidth} title={data.title} url={data.url} urlAlt={data.urlAlt}/>
        </>
     );
}
 
export default NewCard;