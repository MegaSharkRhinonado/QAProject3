import {useState, List} from 'react'
import axios from 'axios'

const SComp01 = () => {
    const [contacts, setContacts] = useState([])
    const [search, setSearch] = useState('')

    const filteredContacts = search.length === 0 ? contacts : 
    contacts.filter(contact => contact.full_name.
                toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            <h3>SEARCH</h3>
                <input 
                    type="text" 
                    placeholder="Search name" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
            <List contacts={filteredContacts}/>
        </div>
    )
}

export default SComp01;