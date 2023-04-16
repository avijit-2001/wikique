import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "./Navbar.css";
import SearchType from "./SearchType";
import { dicActor, dictDirector } from "../api/data";

const Navbar = () => {
  const [searchType, setSearchType] = useState("Select a type!");
  const [searchPerson, setSearchPerson] = useState({});

  const handleChange = (event) => {
    if (event.target.id === "actor") {
      setSearchType("Search by Actor");
      setSearchPerson(dicActor);
    } else if (event.target.id === "director") {
      setSearchType("Search by Director");
      setSearchPerson(dictDirector);
    }
  };
  
  return (
    <>
      <form style={{ marginLeft: 170 }}>
        <div className="float-container">
          <div className="float-child">
            <h4>Search By</h4>
            <SearchType
              id={"actor"}
              name={"radio1"}
              description={"Actor"}
              onClick={handleChange}
            />
            <SearchType
              id={"director"}
              name={"radio1"}
              description={"Director"}
              onClick={handleChange}
            />
          </div>
          <div className="float-child">
            <SearchBar description={searchType} options={searchPerson} />
          </div>
          <div className="float-child">
            <SearchBar description={"Genre"} options={{}} />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-success"
          style={{ marginTop: 27 }}
        >
          Search
        </button>
      </form>
    </>
  );
};

export default Navbar;
