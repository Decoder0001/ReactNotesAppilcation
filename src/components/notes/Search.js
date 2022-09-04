import React from "react";
import "./Search.css";

const Search = ({ searchHandler }) => {
  return (
    <div className="search">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder="type to search"
        onChange={(e) => searchHandler(e.target.value)}
      />
    </div>
  );
};

export default Search;
