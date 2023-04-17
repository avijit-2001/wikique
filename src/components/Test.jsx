import React, { useState } from "react";
import MovieDetails from "./MovieDetails";
import CardWrapper from "./CradWrapper";
import { fetchMovieDetails } from "../api/api";
import Charts from "./Charts";

const Test = ({ movies, chartData, person }) => {
  const [showOverview, setShowOverview] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});
  const handleClickOverview = (movieId) => {
    setShowOverview(true);
    // fetch details
    const fetchData = async () => {
      fetchMovieDetails(movieId)
        .then((movieDetails) => {
          setMovieDetails(movieDetails);
        })
    };
    fetchData();
  };
  const handleClickBack = () => {
    setShowOverview(false);
  };

  return (
    <>
      <div
        style={{
          marginTop: 50,
          maxWidth: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {showOverview ? (
          <MovieDetails onClickBack={handleClickBack} movieDetails = {movieDetails}/>
        ) : (
          <CardWrapper movies={movies} onClickOverview={handleClickOverview} />
        )}
        <div style={{ width: "34.5%" }} className="border">
          <Charts chartData={chartData} person = {person}/>
        </div>
      </div>
    </>
  );
};

export default Test;
