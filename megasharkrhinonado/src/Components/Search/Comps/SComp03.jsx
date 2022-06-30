//SComp03 fetches record and transform reponse, returning an array of object per record
import React, { useState } from 'react'



let SComp03 = ({data}) => {
console.log(data)


    return (
        <>
        <div className="searchPageResults">
            <li>{data.movieTitle}</li>
            <li>{data.description}</li>
            <li>{data.rating}</li>
        </div>
        </>
    )
}

export default SComp03;
