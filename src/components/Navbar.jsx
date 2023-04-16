import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import SearchBar from "./SearchBar";
import "./Navbar.css";
import SearchType from "./SearchType";

const Navbar = () => {
  return (
    <>
      <form style={{ marginLeft: 170 }}>
        <div className="float-container">
          <div className="float-child">
            <h4>Search By</h4>
            <SearchType
              id={"actorButton"}
              name={"radio1"}
              description={"Actor"}
            />
            <SearchType
              id={"directorButton"}
              name={"radio1"}
              description={"Director"}
            />
          </div>
          <div className="float-child">
            <SearchBar />
          </div>
          <div className="float-child">
            <SearchBar />
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
