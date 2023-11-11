import React from "react";
// import { useState } from "react";

// ben use state for search terms

function Search({searchTerm, onSearchChange}) {
  // const [searchTerm, setSearchTerm] = useState("")

  // function onChangeSearch(e){
  //   console.log("Searching...")
  //   setSearchTerm(e.target.value)
  //   // console.log(searchTerm)
  //   updateDataFromSearch(searchTerm)
  // }

  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
