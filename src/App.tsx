import React from 'react';
import { Apartments } from './components/Apartments/Apartments';
import { Header } from './components/Header/Header';
import './App.css';
import { SearchApartment } from './components/SearchApartment/SearchApartment';
import { handleSearch } from './fetures/SearchFunctionality';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <SearchApartment onSearch={handleSearch} />
      <Apartments />
    </div>
  );
}

export default App;
