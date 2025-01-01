import React from "react";



export default function SearchFilter({setQuery}) {
  return (
    <div className="search-container">
      <i className="fas fa-search"></i>
      <input type="text" onChange={(e)=>setQuery(e.target.value.toLowerCase())} placeholder="Search for a country..." />
    </div>
  );
}
