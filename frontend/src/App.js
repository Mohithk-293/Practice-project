

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HousePricePredictor';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, NavLink } from 'react-router-dom';
import HousePricePredictor from './HousePricePredictor';

function Home() {
  const [message, setMessage] = useState('');
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch the initial message from the backend API
    axios.get('/api/hello')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const handleButtonClick = () => {
    // When the button is clicked, make a request to '/api/hi'
    axios.get('/api/msg')
      .then(response => {
        // Update the state with the new message
        setNewMessage(response.data[0].email);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  };

  const navigate = useNavigate();

  const navigateToNewPage = () => {
    // Navigate to the new page when the button is clicked
    navigate('/Predictpage');
  };

  return (
    <div className="Home">
      <h1>{message}</h1> {/* Initially "Hello World" */}
      <button onClick={handleButtonClick}>Click Me!</button> {/* Button to trigger API */}
      {newMessage && <p>{newMessage}</p>} {/* Display the new message after button click */}
      <button onClick={navigateToNewPage}>Go to New Page</button>
    </div>
  );
}



function About(){
  return(
    <div>
    <h2>This is about section</h2>
    </div>
  );
}

function Contact(){
  return(
    <div>
    <h2>This is Contact section</h2>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <NavLink className="navbar-brand" to="#">Navbar</NavLink>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/about" element={<About />} /> {/* NewPage route */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/Predictpage" element={<HousePricePredictor/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
