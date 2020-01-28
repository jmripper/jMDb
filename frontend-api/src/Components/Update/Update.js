import React, { Component } from "react";
import axios from "axios";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: "",
      rated: "",
      movie: props.location.state.movie
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    evt.preventDefault();
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  render() {
    const {
      year,
      rated,
    } = this.state;
    console.log(this.state.movie);
    return (
      <>
        <form className="create-form" onSubmit={this.handleSubmit}>
          <label htmlFor="year">Year:</label>
          <input
            type="text"
            name="year"
            placeholder="2020"
            value={year}
            required
            onChange={this.handleChange}
          />
          <label htmlFor="title">Rating:</label>
          <input
            type="text"
            name="rated"
            placeholder=""
            value={rated}
            required
            onChange={this.handleChange}
          />
          <input
            className="submit-button"
            type="submit"
            value="Update"
          />
        </form>
      </>
    );
  }
}

export default Update;
