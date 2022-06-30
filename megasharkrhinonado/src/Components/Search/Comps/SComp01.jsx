import React from 'react';
import { useState } from 'react'

const SComp01 = ({ handleSearch }) => {

    let [query, setQuery] = useState("");

    const handleChange = (event) => setQuery(event.target.value);

    return (
        <>
           
                <form onSubmit={(e) => handleSearch(query, e)}>
                    <label htmlFor='nav-search'>
                        <span className='visually-hidden'>Search Cinema Titles</span>
                    </label>
                    <input
                        type='search'
                        placeholder='Search Cinema Titles'
                        onChange={handleChange}
                        defaultValue={query}
                    />
                    <button type='submit'>Search</button>
                </form>
            
        </>
    );
};
export default SComp01;