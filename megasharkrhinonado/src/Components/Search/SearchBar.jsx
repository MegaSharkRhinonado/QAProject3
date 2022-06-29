import React, { useState } from 'react'


const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    const keywords = [
        { name: "Towers",},
        { name: "Ring",},
        { name: "Lord",},
        { name: "King",},
        { name: "Towers",},
    ]
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    

    
    return <div>
        <input
            type="search"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput} />
        <table>
            <tr>
                <th></th>
            </tr>
        </table>
    </div>
};
export default SearchBar;