import React from "react";

const SearchBox = ({ onInputChange }) => {
  return (
    <div className="pa">
      <input
        aria-label="Search robots"
        onChange={onInputChange}
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robot"
      />
    </div>
  );
};

export default SearchBox;
