import React from 'react'
import { useState } from 'react';

function SearchBar(props) {
    const [keyword, setKeyword] = useState("");
    
    function handleKeywordInput(event) {
        setKeyword(event.target.value);
        props.handleFilterFood(event.target.value);
    }

  return (
    <div>
        <label htmlFor="filter">Filter</label>
        <input onChange={handleKeywordInput} type="text" id='filter' value={keyword}/>
    </div>
  )
}

export default SearchBar