import React from 'react';

const Cake = ({cakeInfo}) => {

  const cakeIngredients = cakeInfo.ingredients.map( (ingredient, index) => <li key={index}>{ingredient}</li> );

  return (
    <>
        <h2>{cakeInfo.cakeName}</h2>
        <p>Price:  {cakeInfo.price}</p>
        <p>Rating: {cakeInfo.rating}</p>
        <ul>{cakeIngredients}</ul>
    </>
  )

}

export default Cake;