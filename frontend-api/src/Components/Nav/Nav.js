import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <nav className="nav-container">
        <img />
        <div className="headline">Nav Bar Menu</div>
        <div>
          <Link to="/new_movie">
            <button className="new-movie-button">Add New</button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
