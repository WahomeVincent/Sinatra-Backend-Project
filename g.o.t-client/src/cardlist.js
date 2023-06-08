import React, { useState, useEffect } from 'react';

function CardList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch('https://thronesapi.com/api/v2/Characters');
      const data = await response.json();
      setCharacters(data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }

  return (
    <div className="card-list">
      {characters.map(character => (
        <div className="card" key={character.id}>
          <img src={character.imageUrl} alt={character.fullName} />
          <h2>{character.fullName}</h2>
          <p>{character.title}</p>
          <p>{character.family}</p>
        </div>
      ))}
    </div>
  );
}

export default CardList;
