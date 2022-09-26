import React from "react";

const SearchVal = ({ onSearch, val }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };
  console.log(val);
  return (
    <div className="search-books-input-wrapper">
      <input
        type="text"
        value={val}
        placeholder="Search by title or author"
        onChange={handleChange}
        autoFocus
      />
    </div>
  );
};

export default SearchVal;
