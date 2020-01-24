import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = ({ movieList }) => {

  let movies = movieList.map((eachMovie, i) => (
    <div key={i} className="movie-item">
      <Link to={{ pathname: "/movie/" + eachMovie.title, 
      state: { eachMovie: eachMovie }}}>
        <img
          src={eachMovie.poster}
          alt={eachMovie.title}
          className="movie-poster"
        />
      </Link>
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
