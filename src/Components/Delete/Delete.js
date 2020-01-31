import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Delete.css";

export class Delete extends Component {
  handleDelete = id => {
    // evt.preventDefault()
    // const movie = this.state.movie.filter( item => item.id !== id );
    axios
      .delete("https://movie-express-custom-api.herokuapp.com/delete/" + id)
      .then(res => {
        console.log(res.data);
        this.props.getData();
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Link to="/">
        <button
          className="bottom-btn"
          onClick={() => {
            this.handleDelete(this.props.id);
          }}
        >
          Delete
        </button>
      </Link>
    );
  }
}

export default Delete;
