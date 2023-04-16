import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const SearchType = ({id, name, description, onClick}) => {
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name={name}
          id={id}
          onClick={onClick}
        />
        <label className="form-check-label" for={name}>
          {description}
        </label>
      </div>
    </>
  );
};

export default SearchType;