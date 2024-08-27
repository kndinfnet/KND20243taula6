const Exercise06 = () => {

  const myPromise = new Promise((resolv, reject) => {
      const success = true;
      if (success){
        resolv('A promisse foi bem-sucedida!');
      } else {
        reject('Promise falhou!');
      }
    }                            
  )

  myPromise.then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error); //promisse falhou
  });

  
  return <h1>06 - Promisse Resolv / Reject</h1>;
};

export default Exercise06;
