import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>James Cox</h1>
          <NavBar />
        </header>
        <h1>My Profile</h1>
      </div>
    </Router>
  );
}

export default App;
