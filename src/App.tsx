import React from 'react';
import { Apartments } from './components/Apartments/Apartments';
import { Header } from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Apartments />
    </div>
  );
}

export default App;
