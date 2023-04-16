import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import SearchType from "./SearchType";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <SearchType name={"idCheckBox"} id={"actor"} description={"Actor"} />
          <SearchType name={"idCheckBox"} id={"director"} description={"Director"} />
          <SearchBar />
          <SearchBar />
          <button className="btn btn-success">Search</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
