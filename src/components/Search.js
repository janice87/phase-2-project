import React from 'react'

const Search = ({searchTerm, onHandleSearch}) => {
 
    const handleSearch = (e) => {
        onHandleSearch(e.target.value)
    }

    return (
        <div className="searchbar">
           <input type="text" id="search" placeholder="Search by name..." onChange={handleSearch} value={searchTerm} />
        </div>
    )
}

export default Search 