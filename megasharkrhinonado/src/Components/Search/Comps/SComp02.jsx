
import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useParams } from 'react-router-dom';

const SComp02 = () => {

    const params = useParams();

    const [listings, setListings] = useState([]);

    const [filteredLisitings, setFilteredListings] = useState(listings);

    const getListings = () => {
        fetch("http://localhost:3000/movies/getAll")
            .then(response => response.json())
            .then(data => {
                setListings(data);
                handleSearch(data);
            })
            .catch((exception) => {
                console.log(exception);
            });
    }

    useEffect(() => {
        getListings(); 
    }, []);

    const handleSearch = (data) => {
        console.log(data)
        const filtered = data.filter(listing => (listing.movieTitle.search(params.data) != -1));
        setFilteredListings(filtered);
    }


        // for (let i = 0; i < listings.length; i++) {
        //     for (let j = 0; j < i.length; j++) {

                
        //     }
        // }
    // }

    return (
        <>
            <div>
                <ul>
                    {filteredLisitings.map(listing => {
                        console.log(listing);
                        return (
                        <>
                        <div className="results">
                        <h3>{listing.movieTitle}</h3>
                        <p>{listing.description}</p>
                        <h4>{listing.rating}</h4>
                        </div>
                        </>
                        )
                    })}
                    {/* {filteredLisitings.map(listing => <SComp03 key={listing} name={listing} />)} */}
                </ul>
            </div>
        </>
    );
};


export default SComp02;
