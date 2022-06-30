import React from 'react';
import { useRef } from 'react';
import { useState, Link } from 'react'
import { renderMatches, useNavigate } from 'react-router-dom';


const SComp01 = ({ handleSearch }) => {

    let [query, setQuery] = useState("");

    //const handleChange = () => setQuery(searchInput.current.value);
    const navigate = useNavigate();
    const handleChange = () => navigate(`/SearchBar/${searchInput.current.value}`)

    const searchInput = useRef();

    console.log(query)
    
    
    return (
        <>
           
                <form onSubmit={(e) => handleSearch(query, e)}>
                    <label htmlFor='nav-search'>
                        <span className='visually-hidden'>Search Cinema Titles</span>
                    </label>
                    <input
                        name= 'search'
                        ref={searchInput}
                        type='text'
                        placeholder='Search Cinema Titles'
                        
                    />
                   <button onClick={handleChange} type="button">Search</button>
                </form>
            
        </>
    );
};
export default SComp01;