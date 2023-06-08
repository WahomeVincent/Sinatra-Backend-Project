import React, { useState, useEffect } from 'react';

function HousesButton() {
  // const [houses, setHouses] = useState([]);

  const baseApiUrl = 'http://127.0.0.1:9292'

  useEffect(() =>{
      fetch(`${baseApiUrl}/houses`)
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  // const fetchHousesData = async () => {
  //   try {
  //     const response = await fetch('/api/houses');
  //     const data = await response.json();
  //     setHouses(data);
  //   } catch (error) {
  //     console.error('Error fetching houses data:', error);
  //   }
  // };

  // return (
  //   <div>
  //     <button onClick={fetchHousesData} className='my-buttons'>Houses</button>
  //     {houses.map((house) => (
  //       <div key={house.id}>
  //         <h3>{house.name}</h3>
  //         <ul>
  //           {house.characters.map((character) => (
  //             <li key={character.id}>{character.name}</li>
  //           ))}
  //         </ul>
  //       </div>
  //     ))}
  //   </div>
  // );
  return <h1>houses</h1>
}

export default HousesButton;
