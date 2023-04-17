import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { dicActor, dictDirector } from "../api/data";

const SearchBar = ({ description, options, handleChange }) => {
  const onChangeHandler = (event) => {
    if (description === "Genre") {
      const genre = event.target.value;
      handleChange(genre)
    } else {
      const searchText = description.split(" ")[2];
      const name = event.target.value;
      const id = searchText === "Actor" ? dicActor[name] : dictDirector[name];
      handleChange(id);
    }
  };
  return (
    <>
      <label for="exampleDataList" className="form-label">
        {description}
      </label>
      <input
        className="form-control"
        list={"datalistOptions" + description}
        id={"exampleDataList" + description}
        placeholder="Type to search..."
        onChange={onChangeHandler}
      />
      <datalist id={"datalistOptions" + description}>
        {Object.keys(options).map((actorName) => (
          <option value={actorName} key={actorName} />
        ))}
      </datalist>
    </>
  );
};

export default SearchBar;
