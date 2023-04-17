import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BackIcon from "../utility/Results.utility";

const MovieDetails = ({ onClickBack, movieDetails }) => {
  let movieName = undefined;
  let movie = undefined;
  if (Object.keys(movieDetails).length) {
    movieName = Object.keys(movieDetails)[0];
    movie = movieDetails[movieName];
  }

  return (
    <>
      <div style={{ width: "65%" }} className="border">
        <div style={{ overflow: "scroll", height: "600px" }}>
          <div style={{ margin: 4 }}>
            <BackIcon onClickBack={onClickBack} />
            <div className="card mb-3">
              <img
                className="card-img-top"
                src={movie ? movie.imageLink : ""}
                alt="..."
                style={{ height: 370, width: "100%" }}
              />
              <div className="card-body" style={{ height: 270 }}>
                <h5 className="card-title">
                  {movieName ? movieName : "Title"}
                </h5>
                <p className="card-text">
                  <b>Genre: </b>
                  {movie ? Array.from(movie["genreNames"]).join(" •") : ""}
                </p>
                <p className="card-text">
                  <b>Producers: </b>
                  {movie ? Array.from(movie["producerNames"]).join(" •") : ""}
                </p>
                <p className="card-text">
                  <b>Director: </b>
                  {movie ? Array.from(movie["directorNames"]).join(" •") : ""}
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    <b>Cast Members: </b>
                    {movie ? Array.from(movie["castMembers"]).join(" •") : ""}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
