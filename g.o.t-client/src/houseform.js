import React, { useState } from 'react';

function HouseForm() {

  const baseApiUrl = 'http://127.0.0.1:9292'

  const [formData, setFormData] = useState({
    name: '',
    character: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    try {
      const response = await fetch(`${baseApiUrl}/houses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log('House:', data);
      
      // Reset form fields after successful submission
      setFormData({ name: '', character: ''});
      alert('Your House has been created!');
    } catch (error) {
      console.error('Error creating character:', error);
    }
  };

  return (
    <div className="house-form">
      <h1>Fanbaze fictional Houses</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="character">Character:</label>
          <input
            type="text"
            id="character"
            name="character"
            value={formData.character}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HouseForm;
