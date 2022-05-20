import React from 'react'

const Search = ({searchTerm, onHandleSearch}) => {
  //const [searchTerm, setSearchTerm] = useState("")
    const handleSearch = (e) => {
        onHandleSearch(e.target.value)
    }

    return (
        <div>
        <input type="text" id="search" placeholder="Searchy by island..." onChange={handleSearch} value={searchTerm} />
        </div>
    )
}

export default Search