import React from 'react';
import CardList from './cardlist';
import CharacterForm from './characterform';
import HouseForm from './houseform';

function App() {
  return (
    <div className="App">
      <h1>Game of Thrones Characters</h1>
      <CardList />
      <section>
      <CharacterForm />
      <HouseForm />
      </section>
    </div>
  );
}

export default App;
