import SComp03 from "./SComp03";
import axios from "axios";
import React, { useState, useEffect } from "react";

const SComp02 = () => {

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
                <div className="content">
                    {
                        listings.map(listing =>
                            <SComp03 data={listing} key={listing.id} />
                        )
                    }
                </div>
                </>
                );
};

export default SComp02;