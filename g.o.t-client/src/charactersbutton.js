import React, { useState, useEffect } from 'react';

function CharactersButton() {
  const [characters, setCharacters] = useState([]);

  const baseApiUrl = 'http://127.0.0.1:9292'

  const submitFormHandler = (e) => {
    e.preventDefault();
  };


    useEffect(() =>{
        fetch(`${baseApiUrl}/characters`)
        .then(response => response.json())
        .then(data => setCharacters(data))
    }, [])

    return <form onSubmit={submitFormHandler}>
        <select name='character_id' id='character_id' className='custom-select'>
        <option disabled selected value="">Characters</option>

            {characters.map((character) =>(
                <option key={character.id}>{character.first_name}</option>
            ))}

        </select>
    </form>
    
}

export default CharactersButton;
