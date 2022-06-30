import SComp03 from "./SComp03";
import React, { useState, useEffect} from "react";
import SComp01 from "./SComp01";
import axios from 'react'

const SComp02 = () => {

    const [listings, setListings] = useState([SComp03]);

    const [filteredLisitings, setFilteredListings] = useState(listings);

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

    const handleSearch = (query, e) =>{

        e.preventDefault();
        setFilteredListings(listings.filter(listing => listing.data.search(query) != -1));
    }
                return (
                <>
                <div>
                    <SComp01 handleSearch={handleSearch} />
                    <ul>
                    {filteredLisitings.map(listing => <SComp03 key={listing.data} name={listing.data} />)}    
                    </ul>
                </div>
                </>
                );
};

export default SComp02;