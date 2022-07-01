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
            <div style={{marginRight:"2%", marginTop:"0.5%", float:"right"}}>
                <form onSubmit={(e) => handleSearch(query, e)}>
                    <label htmlFor='nav-search'>
                        <span className='visually-hidden'></span>
                    </label>
                    <input
                        name= 'search'
                        ref={searchInput}
                        type='text'
                        placeholder='Search Cinema Titles' 
                        style={{ height:"30px", width:"300px"}}
                    />
                   <button onClick={handleChange} type="button" 
                        style={{height:"30px"}}>Search</button>
                </form>
            </div>
        </>
    );
};
export default SComp01;