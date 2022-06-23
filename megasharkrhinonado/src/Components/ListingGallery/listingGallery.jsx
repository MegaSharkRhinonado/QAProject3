import LGC01 from "./ListingComp/LGC01";
import axios from "axios";
import React, { useState, useEffect } from "react";


const ListingGallery = () => {

    const [listings, setListings] = useState([]);

    const getListings = () => {
        axios.get("http://localhost:3000/movies/getAll")
            .then(response => {
                setListings(response.data)
            }).catch((exception) => {
                console.log(exception);
            });
    }

    useEffect(() => {
        getListings();
    }, []);

    return (
        <>
            {
                listings.map(listing =>
                    <LGC01 data={listing} key={listing.id} />
                )
            }
        </>
    );
}

export default ListingGallery;