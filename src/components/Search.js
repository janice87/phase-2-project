import React from 'react'

const Search = ({searchTerm, onSetSearchTerm}) => {
    const handleSearch = (e) => {
        onSetSearchTerm(e.target.value)
    }

    return (
        <div>
        <input type="text" id="search" placeholder="Search by island" onChange={handleSearch} value={searchTerm} />
        </div>
    )
}

export default Search