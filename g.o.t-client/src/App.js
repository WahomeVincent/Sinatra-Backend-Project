import React from 'react';
import CardList from './cardlist';
import CharacterForm from './characterform';
import HouseForm from './houseform';
import HousesButton from './housesbutton';
import CharactersButton from './charactersbutton';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <h1 className='heading'>Game of Thrones Characters</h1>
      <img className='hero-image' src='https://i.pinimg.com/236x/21/82/c4/2182c44af8fcac4906bd84f3f8eb8cd3.jpg' alt='Winter is coming' />
      <CardList />
      <section>
      <CharacterForm />
      <HouseForm />
      </section>
      <div className='button-card'>
      
        <CharactersButton />
        <HousesButton  />
      </div>

      <Footer />
    </div>
  );
}

export default App;
