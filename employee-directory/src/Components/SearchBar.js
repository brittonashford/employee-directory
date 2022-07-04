import React, { useContext } from 'react';
import { EmployeeContext } from '../Context/EmployeeContext';

export default function SearchBar(){

    const { setQuery } = useContext(EmployeeContext);

    const handleChange = (e) => {
        setQuery(e.target.value.toLowerCase());
    }

    return(
        <nav className="filter-nav">
            <div className="filter-box-container">
                <input id="filter" placeholder="Filter by name..." onChange={handleChange} />
            </div>
        </nav>
    );
}