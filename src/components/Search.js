import React from 'react'
//change to a filter??
const Search = ({searchTerm, onHandleSearch}) => {
  //const [searchTerm, setSearchTerm] = useState("")
    const handleSearch = (e) => {
        onHandleSearch(e.target.value)
    }

    return (
        <div>
        <input type="text" id="search" onChange={handleSearch} value={searchTerm} />
        </div>
    )
}

export default Search