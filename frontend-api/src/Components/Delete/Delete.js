import React from 'react';
import axios from 'axios';

const Delete = props => { 
    const url = "https://movie-express-custom-api.herokuapp.com/delete" + props.movie._id

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
  