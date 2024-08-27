const Exercise05 = () => {

  function fetchData(){
    return new Promise ((resolv, reject) => {
      setTimeout( () => 
        {
          resolv('Dados carregados com sucesso!');
        }
      )
    });
  }

  function processData(data){
     return new Promise ((resolv, reject) => {
       setTimeout( () => 
         {
           resolv(data + ' processado com sucesso!');
         }
       );
     })
  }

  function saveData(processData){
    return new Promise ((resolv, reject) => {
      setTimeout( () => 
        {
          resolv(`Dados salvos: ${processData}`)
        }
      )
    })
  }

  fetchData()
  .then((data) => processData(data))
  .then((processData) => saveData(processData))
  .then((saveData) => {
    console.log(saveData, "Dados recebidos, processados e salvos");
  })
  .catch((err) => {
    console.error('Erro:', err);
  });
  
  return (
    <h1>Promise simples em substituição ao callback hell</h1>
  )
  
}

export default Exercise05;