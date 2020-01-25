import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <nav className="nav-container">
        <div className="headline-container">
          <h2 className="headline">jMBb</h2>
        </div>
        <div className="button-container">
          <Link to="/new_movie">
            <button className="new-movie-button">Add New</button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
