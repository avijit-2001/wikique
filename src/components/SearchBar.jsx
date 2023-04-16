import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const SearchBar = ({description, options}) => {
  return (
    <>
      <label for="exampleDataList" className="form-label">
        {description}
      </label>
      <input
        className="form-control"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Type to search..."
      />
      <datalist id="datalistOptions">
        {options.map()}
      </datalist>
    </>
  );
};

export default SearchBar;
