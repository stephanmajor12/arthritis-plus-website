import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Links from './Components/Links';
import Navbar from './Components/Navbar';
import ProviderPortal from './Components/ProviderPortal';
import Login from './Components/Login';
import Services from './Components/Services';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false); // Initialize the logged in state to false

    // Check for the authToken cookie on component mount
    useEffect(() => {
      const authToken = Cookies.get('authToken');
      console.log('useEffect');
      console.log(loggedIn)
      if (authToken) {
        setLoggedIn(true); // If the cookie exists, update the logged in state to true
      }
    }, []);

  // Define a function to update the logged in state
  const handleLogin = () => {
    setLoggedIn(true);
  };

  // Define a function to update the logged in state to false and remove the cookie
  const handleLogout = () => {
    Cookies.remove('authToken');
    setLoggedIn(false);
  };

  return (
    <>
    <Navbar loggedIn={loggedIn} onLogout={handleLogout}/>
    <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/about' element={<About />} />
      <Route path='/links' element={<Links />} />
      <Route path='/services' element={<Services />} />
      <Route path='/provider' element={<ProviderPortal />} />
      <Route path='/login' element={<Login setLoggedIn={handleLogin}/>} />
    </Routes>
    </>
    
  );
}

export default App;
