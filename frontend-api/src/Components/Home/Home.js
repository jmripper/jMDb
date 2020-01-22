import React from "react";
import './Home.css'

const Home = ({ movieList }) => {
  console.log(movieList);
  let movies = movieList.map((eachMovie, i) => (
    <div key={i} className="movie-item">
      <img src={eachMovie.poster} className="movie-poster" />
    </div>
  ));

  return (
    <>
      <div className="list-wrapper">
        <div className="list-container">{movies}</div>
      </div>
    </>
  );
};

export default Home;
