// src/exercises/Exercise02.js
import React from "react";

//Uso da Promisse Simples com Fetch
//@vantagens: legibilidade, manutenção , tratamento
const Exercise02 = () => {

  async function fetchData() {
    try {
      const response = await fetch('https://apis.codante.io/olympic-games/countries');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }

  fetchData();

 
  return (
    <div>
      <h1>Uso de Async/Await</h1>
      <p></p>
    </div>
  );
};

export default Exercise02;
