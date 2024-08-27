import React, { useState, useEffect } from "react";

const Evento = ({ evento, onClick }) => {
  return (
    <a className="card" onClick={onClick}>
      <h1>{evento.nome}</h1>
      <p>{evento.local}</p>
    </a>
  );
};

const Exercise10 = () => {
  const [eventos, setEventos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategoria, setSelectedCategoria] = useState("");
  const [selectedEvento, setSelectedEvento] = useState(null);
  const [categorias, setCategorias] = useState([]);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.npoint.io/1758fed3b92ac6e45e43");
        if (!response.ok) {
          throw new Error("Network failed");
        }
        const responseData = await response.json();
        setEventos(responseData.eventos);

        // Extrair categorias únicas dos eventos
        const uniqueCategorias = Array.from(new Set(eventos.map(evento => evento.categoria)));
        setCategorias(uniqueCategorias);

        
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [eventos]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategoria(event.target.value);
  };

  const handleClick = (evento) => {
      selectedEvento ? setSelectedEvento(null) : setSelectedEvento(evento);
  };

  const filteredEventos = eventos.filter((evento) => {
    const searchMatch = 
      evento.nome.toLowerCase().includes(searchTerm.toLowerCase()) || 
      evento.local.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = 
      selectedCategoria === "" || evento.categoria === selectedCategoria;

    return searchMatch && categoryMatch;
  });

  return (
    <>
      <h1 className="title">Laboratório de Promisses: Eventos</h1>

      <div>
        <input 
          type="text" 
          placeholder="Buscar por nome ou local" 
          value={searchTerm}
          onChange={handleSearchChange} 
        />
        <select value={selectedCategoria} onChange={handleCategoryChange}>
          <option value="">Todas as Categorias</option>
          {categorias.map((categoria, index) => (
            <option key={index} value={categoria}>{categoria}</option>
          ))}
        </select>
      </div>

      {selectedEvento && (
        <div className="modal">
          <h2>{selectedEvento.nome}</h2>
          <p>{selectedEvento.local}</p>
          <img src={selectedEvento.imagem} alt={selectedEvento.nome} />
        </div>
      )}
      
      {filteredEventos.map((evento, index) => (
        <Evento key={index} evento={evento} onClick={() => handleClick(evento)} />
      ))}


    </>
  );
};

export default Exercise10;
