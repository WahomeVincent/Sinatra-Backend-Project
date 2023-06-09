import React, { useState, useEffect } from 'react';

function HousesButton() {
  const [houses, setHouses] = useState([]);

  const baseApiUrl = 'http://127.0.0.1:9292'

  const submitFormHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() =>{
      fetch(`${baseApiUrl}/houses`)
      .then(response => response.json())
      .then(data => setHouses(data))
  }, [])

  return <form onSubmit={submitFormHandler}>
    
    <select name="house_id" id="house_id" className='custom-select'>
      <option disabled selected value="">Houses</option>
        {houses.map((house) => (
      <option key={house.id} value={house.id}>
        {house.name}
      </option>
  ))}
</select>

  </form>

  
}

export default HousesButton;
