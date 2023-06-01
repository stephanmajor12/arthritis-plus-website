import React, { useState } from 'react';
import axios from 'axios';

function FormView() {
  const [data, setData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/data', data);
      const { name, email, message } = response.data;
      setData({ name, email, message });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setData(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" value={data.name} onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" value={data.email} onChange={handleChange} />

      <label htmlFor="message">Message</label>
      <textarea name="message" value={data.message} onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default FormView;