import React from 'react';
import ReactDOM from 'react-dom/client';
import { createElement } from 'react';
import { useState } from 'react';

// const Cake = ({nameOfCake, ingredients, price, rating}) => {
const Cake = ({cakeInfo}) => {
  const cakeName = cakeInfo.cakeName;
  const cakePrice = cakeInfo.price;
  const cakeRating = cakeInfo.rating;
  const cakeIngredients = cakeInfo.ingredients.map( (ingredient, index) => <li key={index}>{ingredient}</li> );

  return (
    <>
        <h2>{cakeName}</h2>
        <p>Price:  {cakePrice}</p>
        <p>Rating: {cakeRating}</p>
        <ul>{cakeIngredients}</ul>
    </>
  )

  // const cakeIngredients = ingredients.map( (ingredient, index) => <li key={index}>{ingredient}</li> );


  // return (
  //   <>
  //       <h2>{nameOfCake}</h2>
  //       <p>Price:  {price}</p>
  //       <p>Rating: {rating}</p>
  //       <ul>{cakeIngredients}</ul>
  //   </>
  // )
}

export default Cake;