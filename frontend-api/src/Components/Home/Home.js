import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = ({ movieList }) => {
  console.log(movieList);
  let movies = movieList.map((eachMovie, i) => (
    <div key={i} className="movie-item">
      <Link to={"/movie/" + eachMovie.title}>
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
