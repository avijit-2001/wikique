import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "./Navbar.css";
import SearchType from "./SearchType";
import { dicActor, dictDirector } from "../api/data";
import {
  getGenreA,
  getGenreD,
  fetchMoviesByDirector,
  fetchMoviesByActor,
  fetchMovies
} from "../api/api";
import { listToObject } from "../utility/Navbar.utility";

const Navbar = ({updateMovies}) => {
  const [searchType, setSearchType] = useState("Select a type!");
  const [searchPerson, setSearchPerson] = useState({});
  const [listOfGenres, setListOfGenres] = useState(new Set());

  const [personId, setPersonId] = useState(null);
  const [genre, setGenre] = useState(null);

  const handleOnPersonChange = (id) => {
    setPersonId(id);
    let getGenre = () => {};
    const searchText = searchType.split(" ")[2];
    if (searchText === "Actor") {
      getGenre = getGenreA;
    } else if (searchText === "Director") {
      getGenre = getGenreD;
    }
    const fetchData = async () => {
      getGenre(id)
        .then((genres) => {
          setListOfGenres(genres);
        })
        .catch((error) => {
          console.log("Error fetching genres:", error);
        });
    };
    fetchData();
  };
  const handleOnGenreChange = (genre) => {
    setGenre(genre);
  };
  const handleRadioChange = (event) => {
    if (event.target.id === "actor") {
      setSearchType("Search by Actor");
      setSearchPerson(dicActor);
    } else if (event.target.id === "director") {
      setSearchType("Search by Director");
      setSearchPerson(dictDirector);
    }
  };

  const handleSearch = () => {
    if (personId && genre) {
      let fetchMovieByPerson = () => {};
      const searchText = searchType.split(" ")[2];
      if (searchText === "Actor") {
        fetchMovieByPerson = fetchMoviesByActor;
      } else if (searchText === "Director") {
        fetchMovieByPerson = fetchMoviesByDirector;
      }

      const fetchData = async () => {
        fetchMovieByPerson(personId, genre)
          .then((listOfMovies) => {
            return fetchMovies(listOfMovies)
          })
          .then((movies) => {
            updateMovies(movies)
          })
          .catch((error) => {
            console.log("Error fetching genres:", error);
          });
      };
      fetchData();
    }
  };

  return (
    <>
      <div style={{ marginLeft: 170 }}>
        <div className="float-container">
          <div className="float-child">
            <h4>Search By</h4>
            <SearchType
              id={"actor"}
              name={"radio1"}
              description={"Actor"}
              onClick={handleRadioChange}
            />
            <SearchType
              id={"director"}
              name={"radio1"}
              description={"Director"}
              onClick={handleRadioChange}
            />
          </div>
          <div className="float-child">
            <SearchBar
              description={searchType}
              options={searchPerson}
              handleChange={handleOnPersonChange}
            />
          </div>
          <div className="float-child">
            <SearchBar
              description={"Genre"}
              options={listToObject(listOfGenres)}
              handleChange={handleOnGenreChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-success"
          style={{ marginTop: 27 }}
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default Navbar;
