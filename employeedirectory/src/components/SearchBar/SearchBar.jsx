import React from 'react'

function SearchBar() {
  return (
    <div className="search">
      <form className="form">
        <input className="bar" type="search" placeholder="Search" aria-label="Search">
        </input>
        <button className="searchBtn" type="button">Search</button>
      </form>
    </div>
  )
}

export default SearchBar
