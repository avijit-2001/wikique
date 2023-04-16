import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const SearchBar = ({description, options}) => {
  // options = {"avijit": 'Avu'}
  
  console.log("xxx", options)
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
        {Object.keys(options).map((actorName) => (<option value={actorName}/>))}
      </datalist>
    </>
  );
};

export default SearchBar;
