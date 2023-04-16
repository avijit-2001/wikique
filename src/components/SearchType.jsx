import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const SearchType = ({id, name, description}) => {
  return (
    <>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name={name}
          id={id}
        />
        <label class="form-check-label" for={name}>
          {description}
        </label>
      </div>
    </>
  );
};

export default SearchType;