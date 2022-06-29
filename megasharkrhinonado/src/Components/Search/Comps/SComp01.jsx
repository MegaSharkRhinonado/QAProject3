import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react'

const SComp01 = ({ handleSearch }) => {

    let [query, setQuery] = useState("");

    const handleChange = (event) => setQuery(event.target.value);

    return (
        <>
           
                <form onSubmit={(e) => handleSearch(query, e)}>
                    <label htmlFor='header-search'>
                        <span className='visually-hidden'>Search Cinema Titles</span>
                    </label>
                    <input
                        type='search'
                        placeholder='Search Cinema Titles'
                        onChange={handleChange}
                        defaultValue={query}
                    />
                    <Link to="/Search"><button handleSearch={handleSearch} style={{width:"1%"}} type='button'></button></Link>
                </form>
            
        </>
    );
};
export default SComp01;