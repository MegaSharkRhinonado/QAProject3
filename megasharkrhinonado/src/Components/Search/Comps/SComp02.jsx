import SComp03 from "./SComp03";
import React, { useState} from "react";

const SComp02 = () => {

    const [listings, setListings] = useState([]);

    const [filteredLisitings, setFilteredListings] = useState(listings);

    const handleSearch = (query, e) =>{

        e.preventDefault();
        setFilteredListings(listings.filter(listing => listing.data.search(query) != -1));
    }
                return (
                <>
                <div className="content">
                    <SComp03 handleSearch={handleSearch} />
                    <ul>
                    {filteredLisitings.map(listing => <SComp03 key={listing.data} name={listing.data} />)}    
                    </ul>   
                </div>
                </>
                );
};

export default SComp02;