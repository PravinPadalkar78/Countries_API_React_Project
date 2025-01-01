import React from "react";

export default function SelectMenu() {
  return (
    <select className="filter-container">
      <option hidden>Search By Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="oceania">oceania</option>
      <option value="Europe">Europe</option>
    </select>
  );
}
