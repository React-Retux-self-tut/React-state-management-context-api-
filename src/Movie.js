import React from 'react';
const Movie = (props) => {
 
  return (
    <>
      <h3>{props.name}</h3>
      <h3>{props.price}</h3>

    </>
  );
};

export default Movie;
