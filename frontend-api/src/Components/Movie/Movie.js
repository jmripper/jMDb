import React from "react";
import "./Movie.css";

const Movie = props => {
  const movie = props.location.state.eachMovie;
  console.log(props.location.state.eachMovie);

  return (
    <>
      <div className="main-movie-wrapper">
        <div className="movie-data-container">
          <div className="title-wrapper">
            <div className="title-block">
              <h2>{movie.title}</h2>
            </div>
          </div>
          <div className="movie-data">
            <div className="sub-data">
              <span className="sub-text-right">{movie.year}</span>|
              <span className="sub-text-right sub-text-left">{movie.rated}</span>|
              <span className="sub-text-right sub-text-left">{movie.runtime}</span>
            </div>
            {/* <br />
          <p>{movie.genre}</p>
          <p>{movie.runtime}</p>
          <p>{movie.released}</p>
          <p>{movie.plot}</p>
          <br />
          <p>{movie.director}</p>
          <p>{movie.actors}</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
