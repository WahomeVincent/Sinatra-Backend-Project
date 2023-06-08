// import React, { useState ,useRef } from 'react';

// function CharacterForm() {
//   const [formData, setFormData] = useState({
//     first_name: '',
//     last_name: '',
//     title: '',
//     seasons: ''
//   });

//   const firstNameRef = useRef();
//   const lastNameRef = useRef();
//   const titleRef = useRef();
//   const seasonRef = useRef();

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevState) => ({ ...prevState, [name]: value }));
// //   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log(titleRef);
//   };

//   return (
//     <div className="character-form">
//       <h1>Fanbaze fictional characters</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="first_name">First Name</label>
//           <input
//             type="text"
//             id="first_name"
//             name="first_name"
//             value={formData.first_name}
//             // onChange={handleChange}
//             ref={firstNameRef}
//           />
//         </div>
//         <div>
//           <label htmlFor="last_name">Last Name</label>
//           <input
//             type="text"
//             id="last_name"
//             name="last_name"
//             value={formData.last_name}
//             // onChange={handleChange}
//             ref={lastNameRef}
//           />
//         </div>
//         <div>
//           <label htmlFor="title">Title</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={formData.title}
//             // onChange={handleChange}
//             ref={titleRef}
//           />
//         </div>
//         <div>
//           <label htmlFor="seasons">Seasons</label>
//           <input
//             type="text"
//             id="seasons"
//             name="seasons"
//             value={formData.seasons}
//             // onChange={handleChange}
//             ref={seasonRef}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default CharacterForm;

import React, { useState } from 'react';

function CharacterForm() {

    const baseApiUrl = 'http://127.0.0.1:9292'

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    title: '',
    seasons: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseApiUrl}/characters`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log('Character created:', data);
      // Reset form fields after successful submission
      setFormData({ first_name: '', last_name: '', title: '', seasons: '' });
    } catch (error) {
      console.error('Error creating character:', error);
    }
  };

  return (
    <div className="character-form">
      <h1>Fanbaze fictional Characters</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="seasons">Seasons</label>
          <input
            type="text"
            id="seasons"
            name="seasons"
            value={formData.seasons}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CharacterForm;
