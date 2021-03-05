import React from 'react';
import {useState} from "react";

function SearchBar(setEmployees) {
  const [userInput, setUserInput] = useState("");
  const handleChange = (e) => {
    const value = setUserInput(e.target.Value);
    console.log(value);
  }
  
  return (
    <div className="search">
      <form className="form">
        <input className="bar" type="search" placeholder="Search" aria-label="Search" onChange={handleChange} value={userInput}>
        </input>
        <button onClick={handleChange} className="searchBtn" type="button">Search</button>
      </form>
    </div>
  )
}

export default SearchBar
