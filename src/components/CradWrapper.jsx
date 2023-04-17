import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";

const CardWrapper = ({ movies, onClickOverview }) => {
  return (
    <>
      <div style={{ width: "65%" }} className="border">
        <div style={{ overflow: "scroll", height: "600px" }}>
          <div
            className="row  row-cols-1 row-cols-md-3 g-3"
            style={{ marginTop: 3, marginLeft: 0.1 }}
          >
            {movies.map((movie) => (
              <Card
                key={movie.wid}
                movieId={movie.wid}
                name={movie.name}
                logoURL={movie.logoURL}
                duration={movie.duration}
                onClickOverview={onClickOverview}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardWrapper;