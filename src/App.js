import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar'

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <p>
        Welcome to the Cloud Security Guide!
      </p>
      <Navbar/>
    </header>
  </div>
  );
}

export default App;