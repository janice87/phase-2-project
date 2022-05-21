import React from 'react'

const Search = ({searchTerm, onHandleSearch}) => {
 
    const handleSearch = (e) => {
        onHandleSearch(e.target.value)
    }

    return (
        <div className="searchbar">
            {/* <label htmlFor="search">Search ...</label> */}
        <input type="text" id="search" placeholder="Search by name..." onChange={handleSearch} value={searchTerm} />
        </div>
    )
}

export default Search 