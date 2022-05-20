import React from 'react'

const Search = ({searchTerm, onHandleSearch}) => {
 
    const handleSearch = (e) => {
        onHandleSearch(e.target.value)
    }

    return (
        <div>
            <label htmlFor="search">Search ...</label>
        <input type="text" id="search" placeholder="Search by island..." onChange={handleSearch} value={searchTerm} />
        </div>
    )
}

export default Search 