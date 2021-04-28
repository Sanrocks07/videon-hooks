import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, SetTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            value={term}
            placeholder="Search for a video"
            type="text"
            onChange={(event) => SetTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
