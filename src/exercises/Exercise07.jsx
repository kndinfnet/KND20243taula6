const Exercise07 = () => {

  async function fetchData(){
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if(!response.ok){
        throw new Error('Network failed');
      }

      const data = await response.json();

      console.log(data);
    }
    catch (error) {
      console.error(error);
    }
  }

  console.log(fetchData());
  
  return <h1>07 - Fetch com async / await</h1>;
};

export default Exercise07;
