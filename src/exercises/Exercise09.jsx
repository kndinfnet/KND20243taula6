import React, { useState, useEffect } from "react";

const Planeta = ({ planeta, onClick }) => {
  return (
    <a className="card" onClick={onClick}>
      <h1>{planeta.nome}</h1>
    </a>
  );
};

const Exercise09 = () => {
  const [planetas, setPlanetas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.npoint.io/52c9ad7afe45dc91c53d",
        );
        if (!response.ok) {
          throw new Error("Network failed");
        }
        const responseData = await response.json();
        console.log(responseData);
        setPlanetas(responseData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  if (!planetas) {
    return <div>Carregando...</div>;
  }

  const handleClick = (planeta) => {
    alert(`Nome: ${planeta.nome}\n Tipo: ${planeta.tipo}\n Diâmetro: ${planeta.diâmetro}\n Gravidade: ${planeta.gravidade}\n Temperatura Média: ${planeta.temperatura_media}`);
  }

  return (
    <>
      <h1 className="title">Laboratório de Promisses: Planetas </h1>
      {planetas.map((planeta, index) => (
        <Planeta key={index} planeta={planeta} onClick={() => handleClick(planeta)}/>
      ))}
    </>
  );
};

export default Exercise09;
