import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const SearchBar = () => {
  return (
    <>
      <label for="exampleDataList" className="form-label">
        Datalist example
      </label>
      <input
        className="form-control"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Type to search..."
      />
      <datalist id="datalistOptions">
        <option value="San Francisco" />
        <option value="New York" />
        <option value="Chicago" />
      </datalist>
    </>
  );
};

export default SearchBar;
