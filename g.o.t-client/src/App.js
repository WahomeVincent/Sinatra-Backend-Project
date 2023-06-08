import React from 'react';
import CardList from './cardlist';
import CharacterForm from './characterform';
import HouseForm from './houseform';
import HousesButton from './housesbutton';
import CharactersButton from './charactersbutton';

function App() {
  return (
    <div className="App">
      <h1>Game of Thrones Characters</h1>
      <CardList />
      <section>
      <CharacterForm />
      <HouseForm />
      </section>
      <div className='button-card'>
      
        <CharactersButton />
        <HousesButton  />
      </div>
    </div>
  );
}

export default App;
