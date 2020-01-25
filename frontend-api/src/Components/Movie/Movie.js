import React from "react";
import "./Movie.css";

function Movie(props) {
  const movie = props.location.state.eachMovie;
  console.log(movie);

  const date = new Date(movie.released);
  const options = { year: "numeric", month: "long", day: "numeric" };
  options.timeZone = "UTC";
  const releaseDate = date.toLocaleDateString("en-US", options);

  if (movie.genre.length > 2) {
    console.log("more then one genre")
  }

  return (
    <>
      <div className="main-movie-wrapper">
        <div className="movie-data-container">
          <div className="title-wrapper">
            <div className="title-block">
              <h2>{movie.title}</h2>
            </div>
            <div className="title-sub-data">
              <p className="sub-text-right">{movie.year}</p>|
              <p className="sub-text-right sub-text-left">{movie.rated}</p>|
              <p className="sub-text-right sub-text-left">{movie.runtime}</p>
            </div>
          </div>
          <div className="movie-data">
            <img src={movie.poster} className="movie-image" alt={movie.title} />
            <div className="movie-detail">
              <p className="movie-info">{movie.plot}</p>
              <p className="movie-info">
                <span className="bold">Director:</span> {movie.director}
              </p>
              <p className="movie-info">
                <span className="bold">Actors:</span> {movie.actors}
              </p>
              <p className="movie-info">
                <span className="bold">Genre:</span> {movie.genre}
              </p>
              <p className="movie-info">
                <span className="bold">Writers:</span> {movie.writer}
              </p>
              <p className="movie-info">
                <span className="bold">Release Date:</span> {releaseDate}
              </p>
              <p className="movie-info">
                <span className="bold">Production:</span> {movie.production}
              </p>
              <p className="movie-info">
                <span className="bold">imdbRating:</span> {movie.imdbRating}
              </p>
              <p className="movie-info-last">
                <span className="bold">Country:</span> {movie.country}
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movie;
