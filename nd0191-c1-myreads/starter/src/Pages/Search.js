import React from "react";
import { Link } from "react-router-dom";
import SearchVal from "../Components/SearchVal";
import SearchRes from "../Components/SearchRes";
const Search = ({ search, val, Books, onSearch, onMove, onResetSearch }) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search" onClick={onResetSearch}>
          Close
        </Link>
        <SearchVal onSearch={onSearch} val={val} />
      </div>
      {<SearchRes search={search} books={Books} onMove={onMove} />}
    </div>
  );
};

export default Search;
