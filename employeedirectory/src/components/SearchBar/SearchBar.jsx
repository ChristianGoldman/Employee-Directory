import React from 'react'

function SearchBar() {
  return (
    <div className="search">
      <form className="form">
        <input className="bar" type="search" placeholder="Search" aria-label="Search">
        </input>
      </form>
    </div>
  )
}

export default SearchBar
