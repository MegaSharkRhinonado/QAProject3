import LGC01 from "./ListingsComp/LGC01";
import axios from "axios";
import React, { useState } from "react";


const ListingGallery = () => {

    const [listings, setListings] = useState([]);

    const getListings = useEffect(() => {
        axios.get("http://localhost:3000/movies/getAll")
        
        return () => {
            cleanup
        };
    }, [input]);
    return ( 
        <>
            <h2>Listing Gallery</h2>
        </>
     );
}
 
export default ListingGallery;