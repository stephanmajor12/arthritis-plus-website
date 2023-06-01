import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './LoginPage.css';
import Cookies from 'js-cookie';

function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    console.log('login button');
    // login logic
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(res => { // Fetch was not OK
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => { // Fetch was OK
        console.log('Fetch successful:', data);
        // Redirect user to provider portal
        // create cookie for authenticating the user
        Cookies.set('authToken', 'myValue', { expires: 0.5 }); // expires in 12 hours
        props.setLoggedIn(true);
        navigate("/provider");
      })
      .catch(error => { // Error occured in fetch
        console.error('Fetch error:', error);
        return error;
      })
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button className="mt-3 rounded" type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
