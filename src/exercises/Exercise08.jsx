import React, {useState, useEffect} from "react";

const Surf = ({titulo}) => {
  return (
    <div className="card">
      <h1>{titulo.ano}</h1>
      <h2>{titulo.campeao.nome}</h2>
      <p>{titulo.campeao.nacionalidade}</p>
    </div>
  )
}

const Exercise08 = () => {

  const [data, setData] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.npoint.io/53340e2bcae25e14291c');
        if(!response.ok){
          throw new Error('Network failed');
        }
        const responseData = await response.json();
        setData(responseData['campeoes_mundiais_masculinos']);

      }
      catch (error) {
        console.error(error);
      }
    }
    fetchData();
   
  }, []);

  if(!data){
    return <div>Carregando...</div>
  }

    
  console.log(data);
  
  return (
    <>
      <h1 className="title">Laboratório de Promisses: Campeões do SURF </h1>
      {data.map((titulo, index) => (
          <Surf key={index} titulo={titulo}/>
        ))
      }
    </>
  )
 
}

export default Exercise08;