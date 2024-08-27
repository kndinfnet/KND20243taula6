// src/exercises/Exercise03.js
import React, {useState, useEffect} from "react";

//Chamadas Assincronas com useEffect e useState
const Exercise03 = () => {

  const [data, setData] = useState(null);

useEffect (() => {
  const fetchData = async  () => {
     const response = await fetch('https://apis.codante.io/olympic-games/countries');
    const result = await response.json();
    setData(result);
    }
    fetchData();
}, []); //Executa apenas uma vez após a montagem do componente
  
  return (
    <div>
      <h1>Chamadas Assincronas com useEffect e useState</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Exercise03;
