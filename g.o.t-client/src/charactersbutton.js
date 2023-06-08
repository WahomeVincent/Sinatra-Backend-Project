import React, { useState, useEffect } from 'react';

function CharactersButton() {
  const [characters, setCharacters] = useState([]);

  const baseApiUrl = 'http://127.0.0.1:9292'


    useEffect(() =>{
        fetch(`${baseApiUrl}/characters`)
        .then(response => response.json())
        .then(data => setCharacters(data))
    }, [])

    return <form>
        <select name='character_id' id='character_id'>
            {characters.map((character) =>(
                <option key={character.id}>{character.first_name}</option>
            ))}

        </select>
    </form>

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
    
}

export default CharactersButton;
