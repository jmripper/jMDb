import React from 'react';
import axios from 'axios';

const Delete = props => { 
    const movie = props.location.state.movie;
    console.log(movie)
    const url = "https://movie-express-custom-api.herokuapp.com/delete" 

    axios.delete(url)
    .then(response => {
        console.log(response)
    })
    .catch(err => console.log(err));

    return (
      <>
        <div className="delete">
        </div>
      </>
    );
  };
  
export default Delete;
  