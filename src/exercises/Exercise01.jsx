// src/exercises/Exercise01.js
import React from "react";

//Uso da Promisse Simples com Fetch
const Exercise01 = () => {
  
  //fetch("https://null")
    fetch("https://apis.codante.io/olympic-games/countries")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error,
      );
    });

  return (
    <div>
      <h1>Uso da Promisse Simples com Fetch</h1>
      <p></p>
    </div>
  );
};

export default Exercise01;
