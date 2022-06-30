//SComp03 fetches record and transform reponse, returning an array of object per record
import React, { useState } from 'react'
import {Link, Outlet} from 'react'


let SComp03 = () => {

    let listings = useState("");

    return (
        <>
        <div className="searchPageResults">
            <ul>
                {listings.map(listing => (
                    <li key={listing.movieTitle}><Link to={`/listings/${listing.id}`}>{listing.movieTitle} | Details</Link></li>
                ))}
            </ul>
            <Outlet />
        </div>
        </>
    )
}

export default SComp03;
