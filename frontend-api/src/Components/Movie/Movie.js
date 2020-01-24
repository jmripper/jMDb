import React from "react";

const Movie = props => {
  const movie = props.location.state.eachMovie

  return (
    <>
      <div className="movie-data-container">
        <div>
          <h3>{movie.title}</h3>
        </div>
      </div>
    </>
  )
};

export default Movie;
