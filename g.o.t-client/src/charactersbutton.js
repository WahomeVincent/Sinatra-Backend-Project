import React, { useState, useEffect } from 'react';

function CharactersButton() {
  const [characters, setCharacters] = useState([]);

  const baseApiUrl = 'http://127.0.0.1:9292'


    useEffect(() =>{
        fetch(`${baseApiUrl}/characters`)
        .then(response => response.json())
        .then(data => console.log(data))
    }, [])


//   const fetchCharactersData = async () => {
//     try {
//       const response = await fetch('/api/characters');
//       const data = await response.json();
//       setCharacters(data);
//     } catch (error) {
//       console.error('Error fetching characters data:', error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={fetchCharactersData} className='my-buttons'>Characters</button>
//       {characters.map((character) => (
//         <div key={character.id}>
//           <h3>{character.name}</h3>
//           <p>House: {character.house.name}</p>
//         </div>
//       ))}
//     </div>
//   );
    return <h1>Hello</h1>
}

export default CharactersButton;
